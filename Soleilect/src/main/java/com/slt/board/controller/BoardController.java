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
	public ResultVO boardDelete(int b_seq) {
		System.out.println("일반 게시판 삭제");
		return boardService.boardDelete(b_seq);
	}
	
	/**
	 * 게시판 말머리별로 나눠서 가져오기
	 */
	@RequestMapping("/filter")
	public ResultVO boardFilter(String hd_code) {
		System.out.println("일반 게시판 말머리 필터링");
		return boardService.boardFilter(hd_code);
	}
	
	/**
	 * 게시판 검색 기능 
	 */
	@RequestMapping("/search")
	 public ResultVO boardSearch(String search) {
		 System.out.println("일반 게시판 검색 기능");
		 return boardService.boardSearch(search);
	 }
	
	/**
	 * 게시판 상세 조회 
	 */
	@RequestMapping("/detail")
	public ResultVO boardDetail(int b_seq) {
		System.out.println("일반 게시판 상세 조회");
		return boardService.boardDetail(b_seq);
	}
	
	/**
	 * 게시판 조회수 상승
	 */
	@RequestMapping("/views")
	public ResultVO boardViewUP(int b_seq) {
		System.out.println("일반 게시판 조회수 상승");
		return boardService.boardViewUP(b_seq);
	}

}
