package com.slt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.entity.Party_boards;
import com.slt.service.PartyBoardService;

@RequestMapping("/Sol/partyBoardCon")
@RestController
public class PartyBoardController {
	
	@Autowired
	private PartyBoardService partyboardservice;
	
	@RequestMapping("/insert")
	public int partyBoardInsert(Party_boards boards) {
		System.out.println("모집 게시판 삽입 시스템");
		System.out.println("들어온 정보 :");
		System.out.println(boards.getUser_id());
		System.out.println(boards.getUser_nick());
		return partyboardservice.partyBoardInsert(boards);
	}
	
	@RequestMapping("/delete")
	public int partyBoardDelete(int num) {
		System.out.println("모집 게시판 삭제 시스템");
		return partyboardservice.partyBoardDelete(num);
	}
	
	@RequestMapping("/list")
	public List<Party_boards> partyBoardList() {
		System.out.println("모집 게시판 출력 시스템");
		return partyboardservice.partyBoardList();
	}
}
