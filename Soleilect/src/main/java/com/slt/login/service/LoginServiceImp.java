package com.slt.login.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Login;
import com.slt.entity.User;
import com.slt.login.dao.LoginDAO;

@Service
public class LoginServiceImp implements LoginService {
	
	@Autowired
	private LoginDAO loginDao;
	
	@Override
	public ResultVO login(Login login) {
		try {
			User user = loginDao.login(login); 
			List<Object> dataList = new ArrayList<Object>();
			dataList.add(0, user);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}
}
