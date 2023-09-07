package com.nagarro.training.springboot.RegistrationController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.training.springboot.Model.AllProduct;
import com.nagarro.training.springboot.ServiceInterface.ProductServiceInterface;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FilterByPriceController {

	@Autowired
	private ProductServiceInterface productserviceinterface;

	@RequestMapping(value = "/allProductByPrice", method = RequestMethod.GET)
	public ResponseEntity<List<AllProduct>> getAllProductByPrice() {
		System.out.println("Get All Product By Price");
		List<AllProduct> allproduct_list = productserviceinterface.getAllProductByPrice();
		if (allproduct_list.size() <= 0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(allproduct_list));
	}
	
	@RequestMapping(value = "/allProductByPriceD", method = RequestMethod.GET)
	public ResponseEntity<List<AllProduct>> getAllProductByPriceDec() {
		System.out.println("Get All Product By Price in Desc Order");
		List<AllProduct> allproductD_list = productserviceinterface.getAllProductByPriceDec();
		if (allproductD_list.size() <= 0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(allproductD_list));
	}
}
