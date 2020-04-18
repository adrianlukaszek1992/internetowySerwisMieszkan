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
@Table(name = "Bookings")
public class Bookings {

    @Id
    @Column(name = "booking_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;

    @Column(name = "flat_id")
    private int flatId;

    @Column(name = "user_id")
    private int userId;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "date_start")
    private LocalDate startDate;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "date_end")
    private LocalDate endDate;

    private int totalPrice;

    public Bookings(int flatId, int userId, LocalDate startDate, LocalDate endDate, int totalPrice) {
        this.flatId = flatId;
        this.userId = userId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalPrice = totalPrice;
    }

    @JoinColumn(name = "flat_id", referencedColumnName = "flat_id", insertable = false, updatable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    public Flats flats;

    @JoinColumn(name = "user_id", referencedColumnName = "user_id", insertable = false, updatable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    public User user;
}
