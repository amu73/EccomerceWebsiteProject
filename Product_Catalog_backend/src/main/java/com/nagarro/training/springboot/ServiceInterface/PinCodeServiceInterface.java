package com.nagarro.training.springboot.ServiceInterface;

import com.nagarro.training.springboot.Model.SwalClass;

public interface PinCodeServiceInterface {

	boolean getPinCodeByID(long pincode);

	SwalClass getSwalmsg(long pincode);

}
