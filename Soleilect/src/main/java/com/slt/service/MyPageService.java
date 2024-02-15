package com.slt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.entity.Plants;
import com.slt.mapper.MyPageMapper;

@Service
public class MyPageService {
	
	@Autowired
	private MyPageMapper mypagemapper;
	
	public int plantInsert(Plants plants) {
		int row = mypagemapper.plantInsert(plants);
		
		return row;
	}
	
	
	public List<Plants> plantList(String id){
		List<Plants> list = mypagemapper.plantList(id);
		
		return list;
	}
}
