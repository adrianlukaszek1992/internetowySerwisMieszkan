package com.example.demo.controller;

import com.example.demo.model.Bookings;
import com.example.demo.repo.BookingsRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/bookings")
public class BookingsController {

    @Autowired
    BookingsRepository bookingsRepository;

    @GetMapping(value = "/userBookings")
    List<Bookings> getUserBookings(@RequestParam int userId) {
        return bookingsRepository.getBookingsByUserId(userId);
    }


    @GetMapping(value = "/flatBookings")
    List<Bookings> getFlatBookings(@RequestParam int flatId) {
        return bookingsRepository.getBookingsByFlatId(flatId);
    }

    @GetMapping(value = "/bookingsByDate")
    List<Bookings> getBookingsByDate(@RequestParam String startDate, String endDate, int flatId) {
        LocalDate startDateLD = LocalDate.parse(startDate);
        LocalDate endDateLD = LocalDate.parse(endDate);
        return bookingsRepository.getBookingsByDate(startDateLD, endDateLD, flatId);
    }

    @PostMapping(value =  "/upsertBooking")
    void upsertBooking(@RequestBody Bookings booking, boolean isAdd) {
        if(isAdd){
            bookingsRepository.addBooking(booking);
        }else{
            bookingsRepository.editBookings(booking);
        }
    }

    @GetMapping(value = "/getBooking")
    Bookings getBooking(@RequestParam int bookingId) {
        return bookingsRepository.getBookingByBookingId(bookingId);
    }

    @GetMapping(value = "/deleteBooking")
    void deleteBooking(@RequestParam int bookingId) {
        bookingsRepository.deleteBooking(bookingId);
    }
}
