package com.nagarro.training.springboot.RegistrationController;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.training.springboot.Model.AllProduct;
import com.nagarro.training.springboot.ServiceInterface.ProductServiceInterface;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductDetailController {
	@Autowired
	private ProductServiceInterface productserviceinterface;

	@GetMapping("/Productdetails/{id}")
	public ResponseEntity<AllProduct> getAllProductById(@PathVariable("id") long id) {
		AllProduct allproduct = productserviceinterface.getAllProductByID(id);
		if (allproduct == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(allproduct));
	}

}
