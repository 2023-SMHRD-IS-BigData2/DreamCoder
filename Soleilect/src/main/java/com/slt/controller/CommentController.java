package com.slt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.entity.Comments;
import com.slt.service.CommentService;

@RequestMapping("/Sol/commentCon")
@RestController
public class CommentController {
	
	@Autowired
	private CommentService commentservice;
	
	@RequestMapping("/insert")
	public int commentInsert(Comments comments) {
		System.out.println("일반게시판 댓글 삽입");
		System.out.println(comments.toString());
		return commentservice.commentInsert(comments);
	}
	
	@RequestMapping("/delete")
	public int commentDelete(int num) {
		System.out.println("일반게시판 댓글 삭제");
		return commentservice.commentDelete(num);
	}
	
	@RequestMapping("/list")
	public List<Comments> commentList(int num){
		System.out.println("일반게시판 댓글 불러오기");
		return commentservice.commentList(num);
	}
}