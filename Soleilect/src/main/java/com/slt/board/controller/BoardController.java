package com.slt.board.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.board.service.BoardService;
import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Boards;

@RestController
@RequestMapping("/Sol/boardCon")
public class BoardController {
	
	@Autowired
	private BoardService boardService;
	
	/**
	 * 게시판 정보 조회
	 */
	@RequestMapping("/list")
	public ResultVO boardList() {
		return boardService.boardList();
	}
	
	/**
	 * 게시판 정보 등록
	 */
	@RequestMapping("/insert")
	public ResultVO boardInsert(@ModelAttribute Boards boards) {
		return boardService.boardInsert(boards);
	}
	
	@RequestMapping("/update")
	public ResultVO boardUpdate(@ModelAttribute Boards boards) {
		return boardService.boardUpdate(boards);
	}
	
	@RequestMapping("/delete")
	public ResultVO boardDelete(int num) {
		return boardService.boardDelete(num);
	}

}
