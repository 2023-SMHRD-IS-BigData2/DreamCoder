package com.slt.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.slt.entity.Ascenter;
import com.slt.mapper.AscenterMapper;

public class AscenterService {

	@Autowired
	private AscenterMapper ascenterMapper;
	
	public List<Ascenter> ascenterList(){
		
		List<Ascenter> ascenterList = ascenterMapper.ascenterList();
		
		return ascenterList;
	}
	
	public void ascenterInsert(Ascenter ascenter) {
		ascenterMapper.ascenterInsert(ascenter);
		System.out.println(ascenter);
	}
	
	public void ascenterDelete(Long num) {
		ascenterMapper.ascenterDelete(num);
		System.out.println(num);
	}
}
