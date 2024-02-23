package com.slt.user.service;



import com.slt.cmmn.vo.ResultVO;

public interface UserService {
	
	ResultVO userList();
	
	ResultVO userSearch(String search);
}
