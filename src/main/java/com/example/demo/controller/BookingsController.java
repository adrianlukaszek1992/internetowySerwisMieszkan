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
    List<Bookings> getUserBookings(@RequestParam String userId) {
        int userIdInt = Integer.parseInt(userId);
        return bookingsRepository.getBookingsByUserId(userIdInt);
    }


    @GetMapping(value = "/flatBookings")
    List<Bookings> getFlatBookings(@RequestParam String flatId){
    int flatIdInt = Integer.parseInt(flatId);
        return bookingsRepository.getBookingsByFlatId(flatIdInt);
    }

    @GetMapping(value = "/bookingsByDate")
    List<Bookings> getBookingsByDate(@RequestParam String startDate, String endDate, String flatId) {
        int flatIdInt = Integer.parseInt(flatId);
        LocalDate startDateLD = LocalDate.parse(startDate);
        LocalDate endDateLD = LocalDate.parse(endDate);
        return bookingsRepository.getBookingsByDate(startDateLD, endDateLD, flatIdInt);
    }

    @PostMapping(value =  "/upsertBooking")
    void upsertBooking(@RequestBody Bookings booking) {
        bookingsRepository.save(booking);
    }

    @GetMapping(value = "/getBooking")
    Bookings getBooking(@RequestParam String bookingId) {
        int bookingIdInt = Integer.parseInt(bookingId);
        return bookingsRepository.getBookingByBookingId(bookingIdInt);
    }

    @GetMapping(value = "/deleteBooking")
    void deleteBooking(@RequestParam String bookingId) {
        int bookingIdInt = Integer.parseInt(bookingId);
        bookingsRepository.delete(bookingsRepository.getBookingByBookingId(bookingIdInt));
    }
}
