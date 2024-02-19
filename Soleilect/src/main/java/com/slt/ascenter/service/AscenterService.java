package com.slt.ascenter.service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Ascenter;

public interface AscenterService {

	ResultVO ascenterSelectList();
	
	ResultVO ascenterInsert(Ascenter ascenter);
	
	ResultVO ascenterDelete(Long num);
}
