package com.slt.partyboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Party_application;
import com.slt.partyboard.service.PartyApplyService;

@RequestMapping("/Sol/partyApplyCon")
@RestController
public class PartyApplyController {
	
	@Autowired
	private PartyApplyService partyapplyservice;
	
	/**
	 * 발전소를 모집 그룹에 가입 신청
	 */
	@RequestMapping("/apply")
	public ResultVO partyApply(@ModelAttribute Party_application party) {
		System.out.println("발전소 모집 가입 신청");
		return partyapplyservice.partyApply(party);
	}
	
	/**
	 * 발전소 가입 신청 수락
	 *
	 */
	@RequestMapping("/accept")
	public ResultVO partyAccept(@RequestParam int list_seq, int pl_seq) {
		System.out.println("발전소 가입 신청 수락");
		return partyapplyservice.partyAccept(list_seq,pl_seq);
	}
	
	/**
	 * 모집 게시판 현재 발전량 갱신
	 */
	@RequestMapping("/pbUpdate")
	public ResultVO partyApplypbUpdate(@RequestParam int party_seq, int now_cnt) {
		System.out.println("게시물의 현재 발전량 갱신");
		return partyapplyservice.partyApplypbUpdate(party_seq, now_cnt);
	}
}
