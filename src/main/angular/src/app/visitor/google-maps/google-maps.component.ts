import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {} from 'googlemaps';
import {MapsAPILoader} from '@agm/core';
import {Observable} from 'rxjs';
import {Points} from '../../points';
import {MapService} from '../../app.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

declare const google: any;


@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  points: Points[];

  public name: string;
  public mylatitude: number;
  public mylongitude: number;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public length: number;
  public map: any;
  public myPosition: any;


  @ViewChild('search')
  public searchElementRef: ElementRef;


  constructor(
    private httpService: HttpClient,
    private mapService: MapService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private router: Router
    )
{


  }

  ngOnInit() {
    this.loadPlaces();
    this.setCurrentPosition();
    setTimeout(() => this.setPlace(), 2000);


  }

  private loadPlaces() {
    const point1 = new Points();
    point1.latitude = 52.214841;
    point1.longitude = 21.021123;
    point1.name = 'Name1';
    point1.country = 'Poland';
    point1.city = 'Warsaw';
    point1.street = 'Marszałkowska';
    const point2 = new Points();
    point2.latitude = 52.209531;
    point2.longitude = 21.020628;
    point2.name = 'Name1';
    point2.country = 'Poland';
    point2.city = 'Warsaw';
    point2.street = 'Rakowiecka';
    this.points = [point1, point2];

    // this.mapService.getPointsList().subscribe(data => {
    //   this.points = data;
    //   this.length = data.length;
    //   console.log(this.points[0].latitude);
    //   console.log(this.length);
    // });
  }

  private putCurrentPositionOnTheMap() {

    var image = {
      url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(20, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32)
    };
    const myPosition = {lat: this.mylatitude, lng: this.mylongitude};

    let marker;
    marker = new google.maps.Marker({
      position: myPosition,
      map: this.map,
      title: 'Your position!',
      icon: image
    });

  }


  private setMap() {
    console.log(this.longitude);
    console.log(this.zoom);


    let marker;


    if (this.latitude != null) {
      this.myPosition = {lat: this.latitude, lng: this.longitude};
    } else {
      this.myPosition = {lat: this.mylatitude, lng: this.mylongitude};
    }

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: this.myPosition,
      zoom: 12
    });
    this.putCurrentPositionOnTheMap();


    for (let i = 0; i < this.points.length; i++) {
      const position = {lat: this.points[i].latitude, lng: this.points[i].longitude};
      const name = 'Flat to rent! ' + this.points[i].name + '- ' + this.points[i].country + '- ' + this.points[i].city + '- ' + this.points[i].address;
      this.name= this.points[i].name;
      this.setName();

      marker = new google.maps.Marker({
        position: position,
        map: this.map,
        title: name,
        clickable: true
      });
      const routerBroker=this.router;
      google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
          console.log(position);
          setTimeout(() => {

          routerBroker.navigate(['../booking-main']);
          },2000);

        };
      })(marker, i));
    }
  }




  private setPlace() {

    this.setMap();

    //create search FormControl
    this.searchControl = new FormControl();


    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(document.getElementById('pac-input'), {
        types: []
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom


          this.longitude = place.geometry.location.lng();
          this.latitude = place.geometry.location.lat();
          this.zoom = 12;
          this.setMap();


        });
      });
    });

  }


  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
          this.mylatitude = position.coords.latitude;
          this.mylongitude = position.coords.longitude;


          this.zoom = 12;
          console.log(this.mylatitude);
          console.log(this.mylongitude);

        }
      );

    }
  }

  private setNewLocation(longitude, latitude) {
    console.log(this.longitude);
    this.longitude = longitude;
    this.latitude = latitude;
    console.log(this.longitude);
    this.setPlace();

  }

  public selectedName: any;

  public highlightRow(point) {
    this.selectedName = point.name;
  }

  private clickOnBookImage(name) {
    this.name = name;
    this.setName();
    console.log(this.mapService.name);
  }

  public setName() {
    this.mapService.name = this.name;
  }
}
