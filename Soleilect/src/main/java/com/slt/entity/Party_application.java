package com.slt.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Party_application {
	private int apl_seq;
	private int list_seq;
	private int pl_seq;
	private String user_nick;
	private int pl_power;
}
