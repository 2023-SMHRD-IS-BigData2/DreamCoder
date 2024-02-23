package com.slt.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Plant_deep {
	//날짜
	private String dgen_ymd;
	
	//지역코드
	private String ippt;
	
	//발전량
	private float ippt_gen;

}
