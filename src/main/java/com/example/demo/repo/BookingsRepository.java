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

    @Query("select b from Bookings b where b.userId= :userId")
    List<Bookings> getBookingsByUserId(@Param("userId") int userId);

    @Query("select b from Bookings b where b.flatId= :flatId")
    List<Bookings> getBookingsByFlatId(@Param("flatId") int flatId);

    @Query("select b from Bookings b where b.startDate >= :startDate and b.endDate <= :endDate and b.flatId = :flatId")
    List<Bookings> getBookingsByDate(@Param("startDate") LocalDate startDate, @Param("endDate")  LocalDate endDate, @Param("flatId") int flatId);


    @Query("select b from Bookings b where b.bookingId= :bookingId")
    Bookings getBookingByBookingId(@Param("bookingId") int bookingId);

}

