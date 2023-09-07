package com.nagarro.training.springboot.ServiceInterface;

import java.util.List;

import com.nagarro.training.springboot.Model.AllProduct;

public interface ProductServiceInterface {
	List<AllProduct> getAllProduct();

	List<AllProduct> getAllProductByPrice();

	AllProduct saveAllProduct(AllProduct allproduct);

	AllProduct getAllProductByID(Long id);

	void deleteProduct(long id);

	AllProduct updateProduct(AllProduct product, long id);

	List<AllProduct> getAllProductByPriceDec();

}
