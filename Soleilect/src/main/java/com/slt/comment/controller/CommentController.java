package com.slt.comment.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.cmmn.vo.ResultVO;
import com.slt.comment.service.CommentServiceImp;
import com.slt.entity.Comments;

@RequestMapping("/Sol/commentCon")
@RestController
public class CommentController {
	
	@Autowired
	private CommentServiceImp commentservice;
	
	@RequestMapping("/insert")
	public ResultVO commentInsert(Comments comments) {
		System.out.println("일반게시판 댓글 삽입");
		System.out.println(comments.toString());
		return commentservice.commentInsert(comments);
	}
	
	@RequestMapping("/delete")
	public ResultVO commentDelete(int num) {
		System.out.println("일반게시판 댓글 삭제");
		return commentservice.commentDelete(num);
	}
	
	@RequestMapping("/list")
	public ResultVO commentList(int num){
		System.out.println("일반게시판 댓글 불러오기");
		return commentservice.commentList(num);
	}
}
