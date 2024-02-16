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
		System.out.println("모집 게시판 댓글 삽입");
		System.out.println("들어온 정보 :");
		System.out.println(comments.toString());
		return partycommentservice.partyCommentInsert(comments);
	}
	
	@RequestMapping("/delete")
	public int partyCommentDelete(int num) {
		System.out.println("모집 게시판 댓글 삭제");
		return partycommentservice.partyCommentDelete(num);
	}
	
	@RequestMapping("/list")
	public List<Party_comments> partyCommentList(int num){
		System.out.println("모집 게시판 댓글 조회");
		return partycommentservice.partyCommentList(num);
	}
}
