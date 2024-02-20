package com.slt.join.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.User;
import com.slt.join.service.JoinServiceImp;

@RequestMapping("/Sol/joinCon")
@RestController
public class JoinController {
	
	@Autowired 
	private JoinServiceImp joinSevice;
	
	/**
	 *  회원가입
	 */
	@RequestMapping("/join")
	public ResultVO join(@ModelAttribute User user) {
		System.out.println("회원가입");
		System.out.println("들어온 정보 :");
		System.out.println(user.toString());
		return joinSevice.join(user);
	}
	
	/**
	 * 아이디 중복 체크
	 */
	@RequestMapping("/idCheck")
	public ResultVO idcheck(String id) {
		System.out.println("아이디 중복 검사");
		System.out.println("들어온 id : "+id);
		return joinSevice.idCheck(id);
	}
	
	/**
	 * 닉네임 중복 체크
	 */
	@RequestMapping("/nickCheck")
	public ResultVO nickCheck(String nick) {
		System.out.println("닉네임 중복 검사");
		System.out.println("들어온 닉네임 : "+nick);
		return joinSevice.nickCheck(nick);
	}
	
}
