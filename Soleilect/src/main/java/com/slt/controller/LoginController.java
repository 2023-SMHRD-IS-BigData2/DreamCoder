package com.slt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.entity.Login;
import com.slt.entity.User;
import com.slt.service.LoginService;

@RequestMapping("/Sol/logCon")
@RestController
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	@RequestMapping("/login")
	public User login(Login login) {
		System.out.println("로그인");
		
		return loginService.loginService(login); 
	}
	
}
