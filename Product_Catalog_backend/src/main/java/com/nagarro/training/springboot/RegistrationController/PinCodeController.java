package com.nagarro.training.springboot.RegistrationController;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.training.springboot.Model.SwalClass;
import com.nagarro.training.springboot.ServiceInterface.PinCodeServiceInterface;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PinCodeController {

	@Autowired
	private PinCodeServiceInterface pincodeserviceinterface;

	@Autowired
	SwalClass swal;

	@GetMapping("/deliverypincode/{pincode}")
	public ResponseEntity<SwalClass> getAllProductById(@PathVariable("pincode") long pincode) {
		System.out.println("aagaya");
		boolean pcode = pincodeserviceinterface.getPinCodeByID(pincode);
		if (pcode != true) {
			System.out.println("aagaya");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		swal = this.pincodeserviceinterface.getSwalmsg(pincode);
		return ResponseEntity.of(Optional.of(swal));
	}
}
