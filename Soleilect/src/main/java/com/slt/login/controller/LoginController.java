package com.slt.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Login;

@RequestMapping("/Sol/logCon")
@RestController
public class LoginController {
	@Autowired
	private com.slt.login.service.LoginService loginservice;
	
	
	@RequestMapping("/login")
	public ResultVO login(Login login) {
		System.out.println("로그인");
		return loginservice.login(login);
	}
	
}
