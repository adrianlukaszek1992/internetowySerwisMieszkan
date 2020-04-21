package com.example.demo.repo;

import com.example.demo.model.Administrator;
import com.example.demo.model.User;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface AdministratorRepository extends CrudRepository<Administrator, Integer>{


    //void editAdministrator(Administrator administrator);

    @Query("select u from User u")
    List<User> getAllUsers();

}
