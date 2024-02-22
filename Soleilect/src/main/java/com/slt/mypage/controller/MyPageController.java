package com.slt.mypage.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Plants;
import com.slt.mypage.service.MyPageService;

@RequestMapping("/Sol/myPageCon")
@RestController
public class MyPageController {
	@Autowired
	private MyPageService mypageservice;
	
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
	public ResultVO plantDelete(int pl_seq) {
		System.out.println("마이페이지 발전소 삭제");	
		return mypageservice.plantDelete(pl_seq);
	}
	
	/**
	 * 발전소 목록
	 */
	@RequestMapping("/plantList")
	public ResultVO plantList(String user_id){
		
		System.out.println("마이페이지 발전소 목록");
		return mypageservice.plantList(user_id);
	}
	
	/**
	 * 마이페이지 자신이 작성한 글 목록 불러오기
	 */
	@RequestMapping("/myPost")
	public ResultVO myPost(String user_id) {
		System.out.println("마이페이지 내가 작성한 글 목록");
		return mypageservice.myPost(user_id);
	}
	
	/**
	 * 자기가 참여중인 그룹의 발전소 목록 불러오기
	 */
	@RequestMapping("/myGroupPlant")
	public ResultVO myGroupPlant(String user_nick) {
		System.out.println("자신이 참여중인 그룹의 발전소 목록 불러오기");
		return mypageservice.myGroupPlant(user_nick);
	}
	
	/**
	 * 자기가 만든 그룹의 가입 신청자 목록 불러오기
	 */
	@RequestMapping("/myGroupAccept")
	public ResultVO myGroupAccept(String user_nick) {
		System.out.println("자기가 만든 그룹의 가입 신청자 목록 불러오기");
		return mypageservice.myGroupAccept(user_nick);
	}
	
	/**
	 * 자신이 모집자인 그룹이 있는지 탐색
	 * 자신이 모집자면 성공, 아니면 실패라는 메세지가 돌아옴
	 */
	@RequestMapping("/myGroupSearch")
	public ResultVO myGroupSearch(String user_nick) {
		System.out.println("자신이 모집자인 그룹이 있는지 탐색");
		return mypageservice.myGroupSearch(user_nick);
	}
	
	/**
	 * 유저 정보(닉네임, 비밀번호 변경)
	 **/
	@RequestMapping("/userUpdate")
	public ResultVO userUpdate(@RequestParam String user_id, String user_nick, String user_pw) {
		System.out.println("유저 정보 수정");
		return mypageservice.userUpdate(user_id, user_nick, user_pw);
	}
}
