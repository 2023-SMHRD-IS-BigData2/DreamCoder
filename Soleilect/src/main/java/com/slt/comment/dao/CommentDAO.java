package com.slt.comment.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Comments;

@Mapper
public interface CommentDAO {
	int commentInsert(Comments comments);

	int commentDelete(int cmt_seq);
	
	List<Comments> commentList(int b_seq);
}
