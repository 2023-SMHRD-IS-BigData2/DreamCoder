package com.slt.join.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.User;
import com.slt.join.dao.JoinDAO;

@Service
public class JoinServiceImp implements JoinService {
	
	// SpringBoot 요청 순서
		// 요청 : Controller - Service - Mapper Interface - Mapper.xml
		// 응답 : Mapper.xml - MapperInterface - Service - Controller
		
		// Controller의 역할 : 요청을 받고 응답을 하는 작업에 집중
		// Service의 역할 : DB에서 가지고 온 데이터를 가공하는 비지니스 로직에 집중
	
	@Autowired
	private JoinDAO joinDao;
	
	@Override
	public ResultVO join(User user) {
		try {
			if (user.getUser_id() != null) {
				joinDao.join(user);
				return new ResultVO("00", null);
			} else {
				return new ResultVO("03", null);
			}
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
		
	}
	@Override
	public ResultVO idCheck(String id) {
		try {
			int row = joinDao.idCheck(id);
			List<Object> dataList = new ArrayList<Object>();
			dataList.add(row);
			return new ResultVO("00", null);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}
	@Override
	public ResultVO nickCheck(String nick) {
		try {
			int row = joinDao.nickCheck(nick);
			List<Object> dataList = new ArrayList<Object>();
			dataList.add(row);
			return new ResultVO("00", null);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}
	

}
