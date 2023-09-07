package com.nagarro.training.springboot.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PinCode {
	@Id
	private int id;
	private long pincode;

	@Override
	public String toString() {
		return "PinCode [pincode=" + pincode + "]";
	}

	public PinCode() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PinCode(long pincode) {
		super();
		this.pincode = pincode;
	}

	public long getPincode() {
		return pincode;
	}

	public void setPincode(long pincode) {
		this.pincode = pincode;
	}

}
