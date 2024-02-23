package com.slt.user.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.User;
import com.slt.user.dao.UserDAO;

@Service
public class UserServiceImp implements UserService{
	
	@Autowired
	private UserDAO userDao;
	
	@Override
	public ResultVO userList() {
		try {
			List<User> dtList = userDao.userList();
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

	@Override
	public ResultVO userSearch(String search) {
		try {
			List<User> dtList = userDao.userSearch(search);
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

}
