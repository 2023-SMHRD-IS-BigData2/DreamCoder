package com.slt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.entity.User;
import com.slt.mapper.JoinMapper;

@Service
public class JoinService {
	
	// SpringBoot 요청 순서
		// 요청 : Controller - Service - Mapper Interface - Mapper.xml
		// 응답 : Mapper.xml - MapperInterface - Service - Controller
		
		// Controller의 역할 : 요청을 받고 응답을 하는 작업에 집중
		// Service의 역할 : DB에서 가지고 온 데이터를 가공하는 비지니스 로직에 집중
	
	@Autowired
	private JoinMapper joinMapper;
	


	// 회원가입 
	public int join(User user) {
		
		int row = joinMapper.join(user);
		return row;
	}
	

}
