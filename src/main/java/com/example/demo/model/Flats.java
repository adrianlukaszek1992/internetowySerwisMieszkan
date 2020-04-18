package com.example.demo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "Flats")
public class Flats {

    @Id
    @Column(name = "flat_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int flatId;

    @Column(name = "user_id")
    private int  userId;

    @Column(name = "name")
    private String name;

    @Column(name = "country")
    private String country;

    @Column(name = "city")
    private String city;

    @Column(name = "street")
    private String street;

    @Column(name = "street_number")
    private String streetNumber;

    @Column(name = "local_number")
    private String localNumber;

    @Column(name = "latitude")
    private double latitude;

    @Column(name = "longitude")
    private double longitude;

    @Column(name = "price_per_day")
    private double pricePerDay;

    public Flats(int userId, String name, String country, String city, String street, String streetNumber, String localNumber, double latitude, double longitude, double pricePerDay) {
        this.userId = userId;
        this.name = name;
        this.country = country;
        this.city = city;
        this.street = street;
        this.streetNumber = streetNumber;
        this.localNumber = localNumber;
        this.latitude = latitude;
        this.longitude = longitude;
        this.pricePerDay = pricePerDay;
    }

    @JoinColumn(name = "user_id", referencedColumnName = "user_id", insertable = false, updatable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    public User user;

}
