package com.slt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.entity.Party_comments;
import com.slt.mapper.PartyCommentMapper;

@Service
public class PartyCommentService {
	
	@Autowired
	private PartyCommentMapper partycommentmapper;
		
	public int partyCommentInsert(Party_comments comments) {
		return partycommentmapper.partyCommentInsert(comments);
	}
	

	public int partyCommentDelete(int num) {
		return partycommentmapper.partyCommentDelete(num);
	}
	

	public List<Party_comments> partyCommentList(int num){
		return partycommentmapper.partyCommentList(num);
	}
}
