package com.example.demo.repo;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer>{

    @Modifying
    @Query("Insert into User u @Param")
    void addUser(User user);

    @Modifying
    @Query("delete User u from User where userId = :userId")
    void deleteUser(@Param("userId") int userId);

    @Query("Select User u from User where ")
    User getUserByLoginAndPassword(@Param("login") String login, @Param("password") String password);

    @Modifying
    @Query("Update User u set @Param")
    void editUser(User user);

}
