package com.slt.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.cmmn.vo.ResultVO;
import com.slt.user.service.UserService;

@RequestMapping("/Sol/userCon")
@RestController
public class UserController {
	
	@Autowired
	private UserService userservice;
	
	@RequestMapping("/list")
	public ResultVO userList() {
		return userservice.userList();
	}
	
	@RequestMapping("/search")
	public ResultVO userSearch(String search) {
		return userservice.userSearch(search);
	}
	
}
