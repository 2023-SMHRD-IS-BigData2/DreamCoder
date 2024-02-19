package com.slt.comment.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Comments;

@Mapper
public interface CommentDAO {
	int commentInsert(Comments comments);

	int commentDelete(int num);
	
	List<Comments> commentList(int num);
}
