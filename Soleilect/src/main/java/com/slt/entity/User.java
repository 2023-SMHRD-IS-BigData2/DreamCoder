package com.slt.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

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
