package com.example.demo.repo;
//import com.example.demo.model.Bookings;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface BookingsRepository {
//        extends CrudRepository<Bookings, Integer> {
//    List<Bookings> getBookingsByUserId(int userId);
//
//    List<Bookings> getBookingsByFlatId(int flatId);
//
//    List<Bookings> getBookingsByDate(LocalDate startDate, LocalDate endDate, int flatId);
//
//    void addBooking(Bookings booking);
//
//    void editBookings(Bookings booking);
//
//    Bookings getBookingByBookingId(int bookingId);
//
//    void deleteBooking(int bookingId);
}

