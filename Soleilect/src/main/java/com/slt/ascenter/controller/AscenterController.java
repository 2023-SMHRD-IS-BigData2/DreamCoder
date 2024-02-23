package com.slt.ascenter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.ascenter.service.AscenterService;
import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Ascenter;

@RestController
@RequestMapping("/Sol/ascenterCon")
public class AscenterController {
	
	@Autowired
	private AscenterService ascenterService;

	/**
	 * 수리업체 정보조회
	 */
	@PostMapping("/list")
	public ResultVO ascenterSelectList() {
		return ascenterService.ascenterSelectList();
	}

	/**
	 * 수리업체 등록
	 */
	@PostMapping("/insert")
	public ResultVO ascenterInsert(@ModelAttribute Ascenter ascenter) {
		return ascenterService.ascenterInsert(ascenter);
	}

	/**
	 * 수리업체 삭제
	 */
	@PostMapping("/delete")
	public ResultVO ascenterDelete(@ModelAttribute Long num) {
		return ascenterService.ascenterDelete(num);
	}
}
