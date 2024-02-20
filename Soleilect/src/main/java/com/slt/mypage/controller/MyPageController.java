package com.slt.mypage.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Plants;
import com.slt.mypage.service.MyPageServiceImp;

@RequestMapping("/Sol/myPageCon")
@RestController
public class MyPageController {
	@Autowired
	private MyPageServiceImp mypageservice;
	
	/**
	 * 발전소 삽입
	 */
	@RequestMapping("/plantInsert")
	public ResultVO plantInsert(@ModelAttribute Plants plants) {
		System.out.println("마이페이지 발전소 삽입");
		System.out.println("들어온 정보 :");
		System.out.println(plants.toString());
		return mypageservice.plantInsert(plants);
	}
	
	/**
	 * 발전소 삭제
	 */
	@RequestMapping("/plantDelete")
	public ResultVO plantDelete(int num) {
		System.out.println("마이페이지 발전소 삭제");	
		return mypageservice.plantDelete(num);
	}
	
	/**
	 * 발전소 목록
	 */
	@RequestMapping("/plantList")
	public ResultVO plantList(String id){
		System.out.println("마이페이지 발전소 목록");
		return mypageservice.plantList(id);
	}
	
	/**
	 * 마이페이지 자신이 작성한 글 목록 불러오기
	 */
	@RequestMapping("/myPost")
	public ResultVO myPost(String id) {
		System.out.println("마이페이지 내가 작성한 글 목록");
		return mypageservice.myPost(id);
	}
	
	/**
	 * 자기가 참여중인 그룹의 발전소 목록 불러오기
	 */
	@RequestMapping("/myGroupPlant")
	public ResultVO myGroupPlant(String nick) {
		System.out.println("자신이 참여중인 그룹의 발전소 목록 불러오기");
		return mypageservice.myGroupPlant(nick);
	}
	
	/**
	 * 자기가 만든 그룹의 가입 신청자 목록 불러오기
	 */
	@RequestMapping("/myGroupAccept")
	public ResultVO myGroupAccept(String nick) {
		System.out.println("자기가 만든 그룹의 가입 신청자 목록 불러오기");
		return mypageservice.myGroupAccept(nick);
	}
	
	/**
	 * 자신이 모집자인 그룹이 있는지 탐색
	 */
	@RequestMapping("/myGroupSearch")
	public ResultVO myGroupSearch(String nick) {
		System.out.println("자신이 모집자인 그룹이 있는지 탐색");
		return mypageservice.myGroupSearch(nick);
	}
}
