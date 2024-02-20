package com.slt.board.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
		System.out.println("일반 게시판 목록 조회");
		return boardService.boardList();
	}
	
	/**
	 * 게시판 정보 등록
	 */
	@RequestMapping("/insert")
	public ResultVO boardInsert(@ModelAttribute Boards boards) {
		System.out.println("일반 게시판 삽입");
		System.out.println("들어온 정보 :");
		System.out.println(boards.toString());
		return boardService.boardInsert(boards);
	}
	
	/**
	 * 게시판 정보 갱신
	 */
	@RequestMapping("/update")
	public ResultVO boardUpdate(@ModelAttribute Boards boards) {
		System.out.println("일반 게시판 갱신");
		System.out.println("들어온 정보 :");
		System.out.println(boards.toString());
		return boardService.boardUpdate(boards);
	}
	
	/**
	 * 게시판 삭제
	 */
	@RequestMapping("/delete")
	public ResultVO boardDelete(int num) {
		System.out.println("일반 게시판 삭제");
		return boardService.boardDelete(num);
	}
	
	/**
	 * 게시판 말머리별로 나눠서 가져오기
	 */
	@RequestMapping("/filter")
	public ResultVO boardFilter(String hd_code) {
		System.out.println("일반 게시판 말머리 필터링");
		return null;
	}

}
