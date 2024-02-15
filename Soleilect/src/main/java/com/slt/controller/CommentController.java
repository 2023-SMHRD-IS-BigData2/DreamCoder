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
		return commentservice.commentInsert(comments);
	}
	
	@RequestMapping("/list")
	public List<Comments> commentList(int num){
		return commentservice.commentList(num);
	}
}
