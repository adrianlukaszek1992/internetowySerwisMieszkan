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
@Table(name = "User")
public class User {

    public User(String name, String surname, String login, String password, LocalDate birthDate, String email, LocalDate createdDate, double balance) {
        this.name = name;
        this.surname = surname;
        this.login = login;
        this.password = password;
        this.birthDate = birthDate;
        this.email = email;
        this.createdDate = createdDate;
        this.balance = balance;
    }

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "login")
    private String login;

    @Column(name = "password")
    private String password;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "birth_date")
    private LocalDate birthDate;

    @Column(name = "email")
    private String email;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "created_date")
    private LocalDate createdDate;

    @Column(name = "balance")
    private double balance;
}
