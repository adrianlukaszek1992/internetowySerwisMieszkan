package com.example.demo.controller;

import com.example.demo.model.Flats;
import com.example.demo.repo.FlatsRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/flat")
public class FlatsController {

    @Autowired
    FlatsRepository repository;

    @PostMapping(value =  "/upsertFlat")
    void upsertFlat(@RequestBody Flats flat) {
        repository.save(flat);
    }

    @GetMapping(value = "/getFlat")
    Flats getFlat(@RequestParam int flatId) {
        return repository.getFlatById(flatId);
    }

    @GetMapping(value = "/getUserFlats")
    List<Flats>  getUserFlats(@RequestParam int userId) {
        return repository.getFlatsByUserId(userId);
    }

    @GetMapping(value = "/getUserFlats")
    List<Flats>  getFlatsByCity(@RequestParam String city) {
        return repository.getFlatsByCity(city);
    }

    @GetMapping(value = "/deleteFlat")
    void deletFlat(@RequestParam int flatId) {
        repository.delete(repository.getFlatById(flatId));
    }
}
