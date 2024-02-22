package com.slt.chats.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.chats.dao.ChatsDAO;
import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Chats;

@Service
public class ChatsServicelmp implements ChatsService {

	@Autowired
	private ChatsDAO chatsDao;

	// 쪽지 리스트 조회
	@Override
	public ResultVO chatsSelectList(Chats chats) {
		try {
			List<Chats> dtList = chatsDao.chatsSelectList(chats);
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	// 쪽지 발송
	@Override
	public ResultVO chatsInfoInsert(Chats chats) {
		try {
			if (chats.getReceiver_id() != null) {
				chatsDao.chatsInfoInsert(chats);
				return new ResultVO("00", null);
			} else {
				return new ResultVO("03", null);
			}
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

}
