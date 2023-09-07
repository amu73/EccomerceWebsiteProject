package com.nagarro.training.springboot.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class AllProduct {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	private String image;
	private String brand;
	private String code;
	private float price;
	private String description;
	public AllProduct(long id, String name, String image, String brand, String code, float price, String description) {
		super();
		this.id = id;
		this.name = name;
		this.image = image;
		this.brand = brand;
		this.code = code;
		this.price = price;
		this.description = description;
	}
	
	@Override
	public String toString() {
		return "AllProduct [id=" + id + ", name=" + name + ", image=" + image + ", brand=" + brand + ", code=" + code
				+ ", price=" + price + ", description=" + description + "]";
	}
	public long getId() {
		return id;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
//	public AllProduct(long id, String name, String image, String brand, float price, String description) {
//		super();
//		this.id = id;
//		this.name = name;
//		this.image = image;
//		this.brand = brand;
//		this.price = price;
//		this.description = description;
//	}
	public AllProduct() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
