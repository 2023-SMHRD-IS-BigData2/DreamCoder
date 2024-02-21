package com.slt.mypage.service;


import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Plants;

public interface MyPageService {
	ResultVO plantInsert(Plants plants);
	
	ResultVO plantDelete(int pl_seq);
	
	ResultVO plantList(String user_id);
	
	ResultVO myPost(String user_id);
	
	ResultVO myGroupPlant(String user_nick);
	
	ResultVO myGroupAccept(String user_nick);
	
	ResultVO myGroupSearch(String user_nick);
	
	ResultVO userUpdate(String user_id, String user_nick, String user_pw);
	
}
