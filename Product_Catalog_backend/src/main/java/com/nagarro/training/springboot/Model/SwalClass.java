package com.nagarro.training.springboot.Model;

import org.springframework.stereotype.Component;

@Component("swal")
public class SwalClass {
	public String msg;

	public String getMsg() {
		return msg;
	}

	public SwalClass() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public SwalClass(String msg) {
		super();
		this.msg = msg;
	}

	@Override
	public String toString() {
		return "SwalClass [msg=" + msg + "]";
	}

}
