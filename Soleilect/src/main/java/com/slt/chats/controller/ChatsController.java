package com.slt.chats.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.slt.chats.service.ChatsService;
import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Chats;

@RestController
@RequestMapping("/Sol/chatsCon")
public class ChatsController {

	@Autowired
	private ChatsService chatsService;
	
	@GetMapping("/list")
	public ResultVO chatsSelectList(@ModelAttribute Chats chats) {
		return chatsService.chatsSelectList(chats);
	}
	
	@GetMapping("/insert")
	public ResultVO chatsInfoInsert(@ModelAttribute Chats chats) {
		return chatsService.chatsInfoInsert(chats);
	}
	
}
