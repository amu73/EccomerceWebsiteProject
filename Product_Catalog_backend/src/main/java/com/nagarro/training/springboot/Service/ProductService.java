package com.nagarro.training.springboot.Service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.stereotype.Service;

import com.nagarro.training.springboot.Model.AllProduct;
import com.nagarro.training.springboot.Repository.AllproductRepository;
import com.nagarro.training.springboot.ServiceInterface.ProductServiceInterface;

@Service
public class ProductService implements ProductServiceInterface {
	private AllproductRepository allproductRepository;

	public ProductService(AllproductRepository allproductRepository) {
		super();
		this.allproductRepository = allproductRepository;
	}

	@Override
	public AllProduct getAllProductByID(Long id) {
		AllProduct al = new AllProduct();
		AllProduct allproduct = (AllProduct) this.allproductRepository.getReferenceById(id);
		al.setBrand((String) allproduct.getBrand());
		al.setImage((String) allproduct.getImage());
		al.setName((String) allproduct.getName());
//		al.setPrice((String) allproduct.getPrice());
		al.setPrice((float) allproduct.getPrice());
		al.setCode((String) allproduct.getCode());
		al.setDescription((String) allproduct.getDescription());
		al.setId(((allproduct.getId())));
		System.out.println(al + "this is all product");
		return al;
	}

	@Override
	public List<AllProduct> getAllProduct() {
		return this.allproductRepository.findAll();
	}

	@Override
	public AllProduct saveAllProduct(AllProduct allproduct) {
		return this.allproductRepository.save(allproduct);

	}

	@Override
	public void deleteProduct(long id) {
		this.allproductRepository.deleteById(id);

	}

	@Override
	public AllProduct updateProduct(AllProduct product, long id) {
		AllProduct productexist = this.allproductRepository.getOne(id);
		if (productexist != null) {
			productexist.setBrand(product.getBrand());
			productexist.setImage(product.getImage());
			productexist.setName(product.getImage());
			productexist.setPrice(product.getPrice());
			productexist.setCode(product.getCode());
			this.allproductRepository.save(productexist);
		} else
			return null;
		return productexist;

	}

	@Override
	public List<AllProduct> getAllProductByPrice() {
		List<AllProduct> allproduct = this.allproductRepository.findAll();
		Collections.sort(allproduct, Comparator.comparing(AllProduct::getPrice));
		return allproduct;
	}
	@Override
	public List<AllProduct> getAllProductByPriceDec() {
		List<AllProduct> allproduct_ = this.allproductRepository.findAll();
		Collections.sort(allproduct_, Comparator.comparing(AllProduct::getPrice).reversed());
		return allproduct_;
	}

}
