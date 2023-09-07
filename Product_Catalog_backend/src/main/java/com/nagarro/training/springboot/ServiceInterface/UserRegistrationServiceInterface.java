package com.nagarro.training.springboot.ServiceInterface;

import com.nagarro.training.springboot.Model.UserRegistration;

public interface UserRegistrationServiceInterface {
	public String saveUser(UserRegistration userregistration);

	public String checkLogin(String email, String password);
}
