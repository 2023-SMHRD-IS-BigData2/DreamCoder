package com.slt.comment.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.cmmn.vo.ResultVO;
import com.slt.comment.service.PartyCommentService;
import com.slt.entity.Party_comments;

@RequestMapping("/Sol/partyCommentCon")
@RestController
public class PartyCommentController {
	@Autowired
	private PartyCommentService partycommentservice;
	
	/**
	 * 댓글 삽입
	 */
	@RequestMapping("/insert")
	public ResultVO partyCommentInsert(@ModelAttribute Party_comments comments) {
		System.out.println("모집 게시판 댓글 삽입");
		System.out.println("들어온 정보 :");
		System.out.println(comments.toString());
		return partycommentservice.partyCommentInsert(comments);
	}
	
	/**
	 * 댓글 삭제
	 * num으로 댓글이 달린 게시물 값 가져옴
	 */
	@RequestMapping("/delete")
	public ResultVO partyCommentDelete(int p_cmt_seq) {
		System.out.println("모집 게시판 댓글 삭제");
		return partycommentservice.partyCommentDelete(p_cmt_seq);
	}
	
	/**
	 * 댓글 삭제
	 * num으로 댓글이 달린 게시물 값 가져옴
	 */
	@RequestMapping("/list")
	public ResultVO partyCommentList(int party_seq){
		System.out.println("모집 게시판 댓글 조회");
		return partycommentservice.partyCommentList(party_seq);
	}
}
