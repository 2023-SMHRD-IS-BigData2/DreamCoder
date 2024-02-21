package com.slt.comment.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.cmmn.vo.ResultVO;
import com.slt.comment.service.CommentService;
import com.slt.entity.Comments;

@RequestMapping("/Sol/commentCon")
@RestController
public class CommentController {
	
	@Autowired
	private CommentService commentservice;
	
	/**
	 * 댓글 삽입
	 */
	@RequestMapping("/insert")
	public ResultVO commentInsert(@ModelAttribute Comments comments) {
		System.out.println("일반게시판 댓글 삽입");
		System.out.println(comments.toString());
		return commentservice.commentInsert(comments);
	}
	
	/**
	 * 댓글 삭제
	 * cmt_seq로 댓글 고유 번호 가져옴
	 */
	@RequestMapping("/delete")
	public ResultVO commentDelete(int cmt_seq) {
		System.out.println("일반게시판 댓글 삭제");
		return commentservice.commentDelete(cmt_seq);
	}
	
	/**
	 * 댓글 목록 불러오기
	 * b_seq으로 댓글이 달려있는 게시글 값 가져옴
	 */
	@RequestMapping("/list")
	public ResultVO commentList(int b_seq){
		System.out.println("일반게시판 댓글 불러오기");
		return commentservice.commentList(b_seq);
	}
}
