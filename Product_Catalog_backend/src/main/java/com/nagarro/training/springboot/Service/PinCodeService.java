package com.nagarro.training.springboot.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.training.springboot.Model.PinCode;
import com.nagarro.training.springboot.Model.SwalClass;
import com.nagarro.training.springboot.Repository.PincodeRepository;
import com.nagarro.training.springboot.ServiceInterface.PinCodeServiceInterface;

@Service
public class PinCodeService implements PinCodeServiceInterface {
	@Autowired
	private PincodeRepository pincodeRepository;

	@Autowired
	SwalClass swal;

	@Override
	public boolean getPinCodeByID(long pincode) {
		List<PinCode> pcode = this.pincodeRepository.findAll();
		Optional<PinCode> pin = pcode.stream().filter((p) -> p.getPincode() == pincode).findFirst();
		if (pin.isPresent())
			return true;
		else
			return false;
	}

	public PinCodeService() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public SwalClass getSwalmsg(long pincode) {
		Random rd = new Random();
		int day = 15;
		int random = rd.nextInt(day);
		random += 5;
		swal.msg = "expected delivery time " + random + " business days";
		return swal;
	}
}
