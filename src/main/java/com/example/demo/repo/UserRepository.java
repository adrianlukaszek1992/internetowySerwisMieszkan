package com.example.demo.repo;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer>{


    void addUser(User user);


    void deleteUser(@Param("userId") int userId);

    @Query("Select u from User u where u.login = :login AND u.password= :password")
    User getUserByLoginAndPassword(@Param("login") String login, @Param("password") String password);

    @Query("Select u from User u where u.user_id = :userId")
    User getUserById(@Param("userId") int userId);

    void editUser(User user);

}
