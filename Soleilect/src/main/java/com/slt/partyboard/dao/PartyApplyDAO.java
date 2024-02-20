package com.slt.partyboard.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.slt.entity.Party_application;
import com.slt.entity.Plants;

@Mapper
public interface PartyApplyDAO {
	List<Plants> plantList(String id);
	
	int partyApply(Party_application party);
}
