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
	
	@RequestMapping("/insert")
	public ResultVO partyBoardInsert(@ModelAttribute Party_boards boards) {
		System.out.println("모집 게시판 삽입");
		System.out.println("들어온 정보 :");
		System.out.println(boards.toString());
		return partyboardservice.partyBoardInsert(boards);
	}
	
	@RequestMapping("/delete")
	public ResultVO partyBoardDelete(int num) {
		System.out.println("모집 게시판 삭제");
		return partyboardservice.partyBoardDelete(num);
	}
	
	@RequestMapping("/update")
	public ResultVO partyBoardUpdate(@ModelAttribute Party_boards boards) {
		System.out.println("모집 게시판 갱신");
		System.out.println("들어온 정보 :");
		System.out.println(boards.toString());
		return partyboardservice.partyBoardUpdate(boards);
	}
	
	@RequestMapping("/list")
	public ResultVO partyBoardList() {
		System.out.println("모집 게시판 출력");
		return partyboardservice.partyBoardList();
	}
	
	
}
