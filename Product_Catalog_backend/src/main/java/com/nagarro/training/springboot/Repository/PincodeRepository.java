package com.nagarro.training.springboot.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nagarro.training.springboot.Model.PinCode;

@Repository
public interface PincodeRepository extends JpaRepository<PinCode, Integer> {

}
