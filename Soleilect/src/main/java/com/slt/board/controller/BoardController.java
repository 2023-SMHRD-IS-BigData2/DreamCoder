//package com.slt.board.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.slt.board.service.BoardService;
//import com.slt.cmmn.vo.ResultVO;
//import com.slt.entity.Boards;
//
//@RestController
//@RequestMapping("/Sol/boardCon")
//public class BoardController {
//	
//	@Autowired
//	private BoardService boardService;
//	
//	/**
//	 * 게시판 정보 조회
//	 */
//	@GetMapping("/list")
//	public ResultVO boardList() {
//		return boardService.boardSelectList();
//	}
//	
//	/**
//	 * 게시판 정보 등록
//	 */
//	@GetMapping("/insert")
//	public ResultVO boardInsert(@ModelAttribute Boards boards) {
//		return boardService.boardInfoInsert(boards);
//	}
//
//}
