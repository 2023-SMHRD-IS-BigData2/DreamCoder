package com.slt.chats.service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Chats;

public interface ChatsService {
	
	ResultVO chatsSelectList(Chats chats);

	ResultVO chatsInfoInsert(Chats chats);
}
