package com.slt.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Party_list {
	private int list_seq;
	private int party_seq;
	private String party_title;
	private int pl_seq;
	private String user_id;
	private int pl_power;

}
