package com.slt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.entity.User;
import com.slt.service.JoinService;

@RequestMapping("/Sol/joinCon")
@RestController
public class JoinController {
	
	@Autowired 
	private JoinService joinSevice;
	
	@RequestMapping("/join")
	public int join(User user) {
		System.out.println("회원가입");
		System.out.println("들어온 정보 :");
		System.out.println(user.toString());
		return joinSevice.joinService(user);
	}
	
	@RequestMapping("/idCheck")
	public int idcheck(String id) {
		System.out.println("아이디 중복 검사");
		System.out.println("들어온 id : "+id);
		return joinSevice.idCheck(id);
	}
	
	@RequestMapping("/nickCheck")
	public int nickCheck(String nick) {
		System.out.println("닉네임 중복 검사");
		System.out.println("들어온 닉네임 : "+nick);
		return joinSevice.nickCheck(nick);
	}
	
}
