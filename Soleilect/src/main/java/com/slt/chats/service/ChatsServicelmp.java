package com.slt.chats.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.chats.dao.ChatsGroupDAO;
import com.slt.chats.dao.ChatsMsgDAO;
import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Chats;

@Service
public class ChatsServicelmp implements ChatsService {

	@Autowired
	private ChatsGroupDAO chatsGroupDAO;
	
	@Autowired
	private ChatsMsgDAO chatsMsgDAO;

	@Override
	public ResultVO chatsGroupSelectList(Chats chats) {
		try {
			List<Chats> dtList = chatsGroupDAO.chatsGroupSelectList(chats);
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}
	
	@Override
	public ResultVO chatsMsgSelectList(Chats chats) {
		try {
			System.out.println(chats);
			List<Chats> dtList = chatsMsgDAO.chatsMsgSelectList(chats);
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO chatsInfoInsert(Chats chats) {
		try {
			Chats data = chatsGroupDAO.chatsGroupSelectOne(chats);
			if (data == null) {
				chatsGroupDAO.chatsGroupInfoInsert(chats);
				chats.setChat_group_seq(chatsGroupDAO.chatsGroupSelectOne(chats).getChat_group_seq());
				chatsMsgDAO.chatsMsgInfoInsert(chats);
				return new ResultVO("00", null);
			} else {
				chats.setChat_group_seq(data.getChat_group_seq());
				chatsMsgDAO.chatsMsgInfoInsert(chats);
				chatsGroupDAO.chatsGroupUpdateLate(chatsMsgDAO.chatsMsgSelectOne(chats));
				return new ResultVO("00", null);
			}
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
		
	}

}
