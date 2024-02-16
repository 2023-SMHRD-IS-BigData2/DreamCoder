package com.slt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.entity.Boards;
import com.slt.service.BoardService;

@RequestMapping("/Sol/boardCon")
@RestController
public class BoardController {
	
	@Autowired
	private BoardService boardservice;
	
	@RequestMapping("/insert")
	public int boardInsert(Boards boards) {
		System.out.println("일반 게시판 삽입 시스템");
		return boardservice.boardInsert(boards);
	}
	
	@RequestMapping("/delete")
	public int boardDelete(int num) {
		System.out.println("일반 게시판 삭제 시스템");
		return boardservice.boardDelete(num);
	}
	
	@RequestMapping("/update")
	public int boardUpdate(Boards boards) {
		System.out.println("일반 게시판 갱신 시스템");
		return 0;
	}
	
	@RequestMapping("/list")
	public List<Boards> boardList() {
		System.out.println("일반 게시판 출력 시스템");
		return boardservice.boardList();
	}
	
	

}
