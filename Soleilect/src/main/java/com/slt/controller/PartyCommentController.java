package com.slt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.entity.Party_comments;
import com.slt.service.PartyCommentService;

@RequestMapping("/Sol/partyCommentCon")
@RestController
public class PartyCommentController {
	@Autowired
	private PartyCommentService partycommentservice;
	
	@RequestMapping("/insert")
	public int partyCommentInsert(Party_comments comments) {
		return partycommentservice.partyCommentInsert(comments);
	}
	
	@RequestMapping("/delete")
	public int partyCommentDelete(int num) {
		return partycommentservice.partyCommentDelete(num);
	}
	
	@RequestMapping("/list")
	public List<Party_comments> partyCommentList(int num){
		return partycommentservice.partyCommentList(num);
	}
}
