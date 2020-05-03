import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {} from 'googlemaps';
import {MapsAPILoader} from '@agm/core';
import {Observable} from 'rxjs';
import {MapService} from '../app.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AgmCoreModule} from '@agm/core';
import {Booking} from '../booking';
import {FlatService} from '../flatService';

declare const google: any;

export class Coords {
  latitude: number;
  longitude: number;
}


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  item: Coords = new Coords();
  currentLocation: string;
  fullAddress: string;


  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private bannerRegisterService: FlatService
  ) {
  }

  ngOnInit() {
    // set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: []
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  private setPointPosition($event) {
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.bannerRegisterService.latitude = this.latitude;
    this.bannerRegisterService.longitude = this.longitude;
    this.getGeoLocation(this.latitude, this.longitude);
  }

  getGeoLocation(lat: number, lng: number) {
    if (navigator.geolocation) {
      const geocoder = new google.maps.Geocoder();
      const latlng = new google.maps.LatLng(lat, lng);
      const request = {latLng: latlng};

      geocoder.geocode(request, (results, status) => {
        this.mapsAPILoader.load().then(() => {
          const geocoder = new google.maps.Geocoder;
          const latlng = {lat: this.latitude, lng: this.longitude};
          const that = this;
          geocoder.geocode({'location': latlng}, result => {
            if (results[0]) {
              that.zoom = 11;
              that.currentLocation = results[0].formatted_address;
              console.log(that.currentLocation);
              this.fullAddress = that.currentLocation;
            } else {
              console.log('No results found');
            }
          });
        });
      });

      setTimeout(() => this.bannerRegisterService.fullAdress = this.fullAddress, 2000);

    }
  }
}
