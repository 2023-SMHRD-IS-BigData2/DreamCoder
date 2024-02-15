package com.slt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.entity.Comments;
import com.slt.mapper.CommentMapper;

@Service
public class CommentService {
	
	@Autowired
	private CommentMapper commentmapper;
	
	public int commentInsert(Comments comments) {
		int row = commentmapper.commentInsert(comments);
		return row;
	}
	
	public List<Comments> commentList(int num){
		List<Comments> list = commentmapper.commentList(num);
		return list;
	}
}
