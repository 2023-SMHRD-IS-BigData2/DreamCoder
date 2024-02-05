package com.slt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.mapper.JoinMapper;

@Service
public class JoinService {
	
	@Autowired
	private JoinMapper joinMapper;
	
	public int join() {
		
	}

}
