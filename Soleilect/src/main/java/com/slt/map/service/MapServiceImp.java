package com.slt.map.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slt.cmmn.vo.ResultVO;
import com.slt.entity.Plant_deep;
import com.slt.map.dao.MapDAO;

@Service
public class MapServiceImp implements MapService {
	
	@Autowired
	private MapDAO mapDao;
	
//	@Override
//	public ResultVO mapList() {
//		try {
//			List<Plant_deep> dtList = mapDao.mapList();
//			List<Object> dataList = new ArrayList<Object>();
//			dataList.addAll(dtList);
//			return new ResultVO("00", dataList);
//		} catch (Exception e) {
//			return new ResultVO("99", null);
//		}
//	}

	@Override
	public ResultVO mapSumList() {
		try {
			List<Plant_deep> dtList = mapDao.mapSumList();
			List<Object> dataList = new ArrayList<Object>();
			dataList.addAll(dtList);
			return new ResultVO("00", dataList);
		} catch (Exception e) {
			return new ResultVO("99", null);
		}
	}

}
