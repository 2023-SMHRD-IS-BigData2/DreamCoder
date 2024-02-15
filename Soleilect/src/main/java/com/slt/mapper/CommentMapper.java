package com.slt.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Comments;

@Mapper
public interface CommentMapper {
	public int commentInsert(Comments comments);

	public List<Comments> commentList(int num);
}
