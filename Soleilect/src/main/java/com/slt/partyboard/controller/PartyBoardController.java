package com.slt.partyboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Party_boards;
import com.slt.partyboard.service.PartyBoardService;


@RequestMapping("/Sol/partyBoardCon")
@RestController
public class PartyBoardController {
	
	@Autowired
	private PartyBoardService partyboardservice;
	
	/**
	 * 모집 게시판 삽입
	 */
	@RequestMapping("/insert")
	public ResultVO partyBoardInsert(@ModelAttribute Party_boards boards) {
		System.out.println("모집 게시판 삽입");
		System.out.println("들어온 정보 :");
		System.out.println(boards.toString());
		return partyboardservice.partyBoardInsert(boards);
	}
	
	/**
	 * 모집 게시판 삭제
	 */
	@RequestMapping("/delete")
	public ResultVO partyBoardDelete(int party_seq) {
		System.out.println("모집 게시판 삭제");
		System.out.println("들어온 값 : "+party_seq);
		return partyboardservice.partyBoardDelete(party_seq);
	}
	
	/**
	 * 모집 게시판 갱신
	 */
	@RequestMapping("/update")
	public ResultVO partyBoardUpdate(@ModelAttribute Party_boards boards) {
		System.out.println("모집 게시판 갱신");
		System.out.println("들어온 정보 :");
		System.out.println(boards.toString());
		return partyboardservice.partyBoardUpdate(boards);
	}
	
	/**
	 * 모집 게시판 불러오기
	 */
	@RequestMapping("/list")
	public ResultVO partyBoardList() {
		System.out.println("모집 게시판 출력");
		return partyboardservice.partyBoardList();
	}
	
	/**
	 * 모집 게시판 검색 기능 
	 */
	@RequestMapping("/search")
	public ResultVO partyBoardSearch(String search) {
		System.out.println("모집 게시판 검색 기능");
		return partyboardservice.partyBoardSearch(search);
	}
	
	/**
	 * 모집 게시판 검색 기능 
	 */
	@RequestMapping("/detail")
	public ResultVO partyBoardDetail(int party_seq) {
		System.out.println("모집 게시판 상세 조회");
		return partyboardservice.partyBoardDetail(party_seq);
	}
	
	
	/**
	 * 모집 게시판 조회수 상승 
	 */
	@RequestMapping("/views")
	public ResultVO partyBoardViewUp(int party_seq) {
		System.out.println("모집 게시판 조회수 상승");
		return partyBoardViewUp(party_seq);
	}
	
	
}
