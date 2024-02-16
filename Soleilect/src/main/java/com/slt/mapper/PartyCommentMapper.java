package com.slt.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Party_comments;
@Mapper
public interface PartyCommentMapper {
	public int partyCommentInsert(Party_comments comments);
	
	public int partyCommentDelete(int num);
	
	public List<Party_comments> partyCommentList(int num);
}
