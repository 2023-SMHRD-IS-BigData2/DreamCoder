package com.slt.mypage.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Plants;
import com.slt.mypage.dao.MyPageDAO;

@Service
public class MyPageServiceImp implements MyPageService{

	@Autowired
	private MyPageDAO mypageDao;
	
	@Override
	public ResultVO plantInsert(Plants plants) {
		try {
			if (plants.getPl_name() != null) {
				mypageDao.plantInsert(plants);
				return new ResultVO("00", null);
			} else {
				return new ResultVO("03", null);
			}
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}
	
	@Override
	public ResultVO plantDelete(int num) {
		try {
			int row = mypageDao.plantDelete(num);
			if (row != 0) {
				return new ResultVO("00", null);
			} else {
				return new ResultVO("05", null);
			}

		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}
	
	@Override
	public ResultVO plantList(String id) {
		try {
			List<Plants> dtList = mypageDao.plantList(id);
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}
}
