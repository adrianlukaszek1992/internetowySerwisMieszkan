package com.example.demo.repo;

import com.example.demo.model.Flats;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface FlatsRepository extends CrudRepository<Flats, Integer>{

    @Query("select f from Flats f where f.userId =:userId")
    List<Flats> getFlatsByUserId(@Param("userId") int userId);

    @Query("select f from Flats f where f.flatId =:flatId")
    Flats getFlatById(@Param("flatId") int flatId);


    //void addFlat(Flats flat);

//
//    void deleteFlat(int flatId);
//
//    void editFlat (Flats flat);

    @Query("select f from Flats f where f.city =:city")
    List<Flats> getFlatsByCity(@Param("city") String city);

}
