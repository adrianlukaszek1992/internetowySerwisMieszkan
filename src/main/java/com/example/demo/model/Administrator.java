package com.example.demo.model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;

@Setter
@Getter
@Entity
@Table(name = "administrator.ts")
public class Administrator {

    @Id
    @Column(name = "administrator_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int administratorId;

    @Column(name = "user_id")
    private int userId;

    @Column(name = "City")
    private String City;

    @Column(name = "Street")
    private String Street;

    @Column(name = "street_number")
    private String streetNumber;

    @Column(name = "local_number")
    private String localNumber;

    @Column(name = "Postcode")
    private String Postcode;

    @Column(name = "Pesel")
    private String Pesel;

    @Column(name = "phone_number")
    private String phoneNumber;

}
