package com.slt.map.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.cmmn.vo.ResultVO;
import com.slt.map.service.MapService;

@RequestMapping("/Sol/mapCon")
@RestController
public class MapController {
	@Autowired
	private MapService mapservice;

//	@RequestMapping("/list")
//	public ResultVO mapList() {
//		
//		return mapservice.mapList();
//	}
	
	@RequestMapping("/sum")
	public ResultVO mapSumList() {
		return mapservice.mapSumList();
	}
}
