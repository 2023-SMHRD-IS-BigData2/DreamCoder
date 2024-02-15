package com.slt.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Plants {
	private int pl_seq;
	private String pl_name;
	private String user_id;
	private String pl_loc;
	private int pl_power;
	private String bs_num;
	private int pl_isJoin;
}
