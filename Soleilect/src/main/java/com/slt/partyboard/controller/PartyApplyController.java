package com.slt.partyboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
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
	public ResultVO partyApply(Party_application party) {
		return partyapplyservice.partyApply(party);
	}
	
	/**
	 * 모집 게시판 현재 발전량 갱신
	 */
	@RequestMapping("/pbUpdate")
	public ResultVO partyApplypbUpdate(int num) {
		return null;
	}
}
