package com.slt.mypage.service;


import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Plants;

public interface MyPageService {
	ResultVO plantInsert(Plants plants);
	
	ResultVO plantDelete(int num);
	
	ResultVO plantList(String id);
	
	ResultVO myPost(String id);
}
