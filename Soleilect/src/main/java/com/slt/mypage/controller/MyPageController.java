package com.slt.mypage.controller;


import org.springframework.beans.factory.annotation.Autowired;
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
	public ResultVO plantInsert(Plants plants) {
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
	
}
