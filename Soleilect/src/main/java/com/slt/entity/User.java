package com.slt.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


//유저 정보
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
	private String user_id;
	private String user_pw;
	private String user_nick;
	private String user_name;
	private Role user_role;
	
}
