package com.slt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.entity.Plants;
import com.slt.service.MyPageService;

@RequestMapping("/Sol/myPageCon")
@RestController
public class MyPageController {
	@Autowired
	private MyPageService mypageservice;
	
	@RequestMapping("/plantInsert")
	public int plantInsert(Plants plants) {
		return mypageservice.plantInsert(plants);
	}
	
	@RequestMapping("/plantList")
	public List<Plants> plantList(String id){
		return mypageservice.plantList(id);
	}
	
}
