package com.nagarro.training.springboot.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nagarro.training.springboot.Model.UserRegistration;
import com.nagarro.training.springboot.Repository.UserRegistrationRepository;
import com.nagarro.training.springboot.ServiceInterface.UserRegistrationServiceInterface;

@Service
public class UserRegistrationService implements UserRegistrationServiceInterface {

	private UserRegistrationRepository userregistrationrepository;

	public UserRegistrationService(UserRegistrationRepository userregistrationrepository) {
		super();
		this.userregistrationrepository = userregistrationrepository;
	}

	public String saveUser(UserRegistration userregistration) {
		List<UserRegistration> checkuser = this.userregistrationrepository.findAll();
		Optional<UserRegistration> userReg = checkuser.stream()
				.filter(user -> (userregistration.getEmail().equalsIgnoreCase(user.getEmail()))).findFirst();

		if (userReg.isPresent()) {
			return null;
		} else {
			UserRegistration userregistrationobj = new UserRegistration();
			userregistrationobj.setFirstname(userregistration.getFirstname());
			userregistrationobj.setLastname(userregistration.getLastname());
			userregistrationobj.setEmail(userregistration.getEmail());
			userregistrationobj.setPassword(userregistration.getPassword());
			userregistrationobj.setConfirmpassword(userregistration.getConfirmpassword());
			this.userregistrationrepository.save(userregistrationobj);
			return "Registration Successfull";
		}

	}

	public String checkLogin(String email, String password) {
		List<UserRegistration> checkuser = this.userregistrationrepository.findAll();
		Optional<UserRegistration> userReg = checkuser.stream()
				.filter(user -> (email.equalsIgnoreCase(user.getEmail()) && password.equals(user.getPassword())))
				.findFirst();

		if (userReg.isPresent()) {
			return "User login successfull";
		} else {
			return null;
		}
	}

	public String findAll() {
		this.userregistrationrepository.findAll();
		return null;
	}

	public String checkRegistration(String email) {
		List<UserRegistration> checkuser = this.userregistrationrepository.findAll();
		Optional<UserRegistration> userReg = checkuser.stream()
				.filter(user -> (email.equalsIgnoreCase(user.getEmail()))).findFirst();

		if (userReg.isPresent()) {
			return "This user has already has an account";
		} else {
			return null;
		}
	}
}
