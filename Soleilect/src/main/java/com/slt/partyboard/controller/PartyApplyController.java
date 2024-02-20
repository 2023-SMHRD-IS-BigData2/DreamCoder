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
	 * 발전소를 모집 그룹에 가입
	 */
	@RequestMapping("/apply")
	public ResultVO partyApply(@ModelAttribute Party_application party) {
		return partyapplyservice.partyApply(party);
	}
	
	/**
	 * 모집 게시판 현재 발전량 갱신
	 */
	@RequestMapping("/pbUpdate")
	public ResultVO partyApplypbUpdate(@RequestParam int party_seq, int now_cnt) {
		return partyapplyservice.partyApplypbUpdate(party_seq, now_cnt);
	}
}
