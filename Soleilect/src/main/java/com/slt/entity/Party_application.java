package com.slt.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Party_application {
	private int list_seq;
	private int party_seq;
	private String party_title;
	private int pl_seq;
	private String pl_name;
	private String user_nick;
	private int pl_power;
	private int pl_isJoin;
}
