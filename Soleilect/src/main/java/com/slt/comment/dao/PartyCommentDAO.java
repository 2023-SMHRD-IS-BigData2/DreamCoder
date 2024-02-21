package com.slt.comment.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Party_comments;
@Mapper
public interface PartyCommentDAO {
	int partyCommentInsert(Party_comments comments);
	
	int partyCommentDelete(int p_cmt_seq);
	
	List<Party_comments> partyCommentList(int party_seq);
}
