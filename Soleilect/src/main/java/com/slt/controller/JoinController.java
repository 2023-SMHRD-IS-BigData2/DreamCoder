package com.slt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.entity.user;
import com.slt.service.JoinService;

@RequestMapping("/Sol/joinCon")
@RestController
public class JoinController {
	
	@Autowired 
	private JoinService joinSevice;
	
	@RequestMapping("/join")
	public int join(user user) {
		return joinSevice.join(user);
	}
	
}
