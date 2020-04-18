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

    @Query("select b from Bookings b where userId= :userId")
    List<Bookings> getBookingsByUserId(@Param("userId") int userId);

    @Query("select b from Bookings b where flatId= :flatId")
    List<Bookings> getBookingsByFlatId(@Param("flatId") int flatId);

    @Query("select b from Bookings b where startDate >= :startDate and endDate <= endDate")
    List<Bookings> getBookingsByDate(@Param("startDate") LocalDate startDate, @Param("endDate")  LocalDate endDate, int flatId);

    @Modifying
    @Query("insert into Bookings b @Param")
    void addBooking(Bookings booking);

    @Modifying
    @Query("update Bookings b set @Param")
    void editBookings(Bookings booking);

    @Query("select b from Bookings b where bookingId= :bookingId")
    Bookings getBookingByBookingId(@Param("bookingId") int bookingId);

    @Modifying
    @Query("delete Administrator a from  Administrator where bookingId = :bookingId")
    void deleteBooking(int bookingId);
}

