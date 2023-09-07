package com.nagarro.training.springboot.RegistrationController;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.training.springboot.Model.UserRegistration;
import com.nagarro.training.springboot.Service.UserRegistrationService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserLoginController {

	private UserRegistrationService userregistrationservice;

	public UserLoginController(UserRegistrationService userregistrationservice) {
		super();
		this.userregistrationservice = userregistrationservice;
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<?> userRegistration(@RequestBody UserRegistration userregistration) {
		System.out.println("UserRegistration");
		System.out.println(userregistration.getPassword());
		String val = this.userregistrationservice.checkLogin(userregistration.getEmail(),
				userregistration.getPassword());
		if (val != null) {
			return ResponseEntity.ok(userregistration);
		} else {
			return (ResponseEntity<?>) ResponseEntity.internalServerError();
		}

	}
}
