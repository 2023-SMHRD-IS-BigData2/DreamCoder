package com.slt.join.service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.User;

public interface JoinService {
	public ResultVO join(User user);
	
	public ResultVO idCheck(String id);
	
	public ResultVO nickCheck(String nick);
}
