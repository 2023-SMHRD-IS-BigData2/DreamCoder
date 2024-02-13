package com.slt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.entity.Party_boards;
import com.slt.service.PartyBoardService;

@RequestMapping("/Sol/partyboardCon")
@RestController
public class PartyBoardController {
	
	@Autowired
	private PartyBoardService partyboardservice;
	
	@RequestMapping("/insert")
	public int PartyBoardInsert(Party_boards boards) {
		return partyboardservice.PartyBoardInsert(boards);
	}
	
	@RequestMapping("/delete")
	public int PartyBoardDelete(int num) {
		return partyboardservice.PartyBoardDelete(num);
	}
	
	@RequestMapping("/list")
	public List<Party_boards> PartyBoardList() {
		return partyboardservice.PartyBoardList();
	}
}
