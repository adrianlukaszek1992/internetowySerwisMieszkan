package com.example.demo.repo;
import com.example.demo.model.Bookings;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface BookingsRepository extends CrudRepository<Bookings, Integer> {

    @Query("select b from Bookings b where b.user_id= :userId")
    List<Bookings> getBookingsByUserId(@Param("userId") int userId);

    @Query("select b from Bookings b where b.flat_id= :flatId")
    List<Bookings> getBookingsByFlatId(@Param("flatId") int flatId);

    @Query("select b from Bookings b where b.start_date >= :startDate and b.end_date <= endDate")
    List<Bookings> getBookingsByDate(@Param("startDate") LocalDate startDate, @Param("endDate")  LocalDate endDate, int flatId);


    void addBooking(Bookings booking);


    void editBookings(Bookings booking);

    @Query("select b from Bookings b where booking_id= :bookingId")
    Bookings getBookingByBookingId(@Param("bookingId") int bookingId);

    void deleteBooking(int bookingId);
}

