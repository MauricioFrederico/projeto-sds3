package com.devsuperior.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsvendas.dto.SaleSuccessDTO;
import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.entity.Sale;

public interface SaleRepository  extends JpaRepository<Sale, Long>{
	
	@Query("select new com.devsuperior.dsvendas.dto.SaleSumDTO(obj.seller, sum(obj.amount)) "
			+ " from Sale as obj GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupedBySeller();
	
	
	@Query("select new com.devsuperior.dsvendas.dto.SaleSuccessDTO(obj.seller, sum(obj.visited), sum(obj.deals)) "
			+ " from Sale as obj GROUP BY obj.seller")
	List<SaleSuccessDTO> successGroupedBySeller();
}
