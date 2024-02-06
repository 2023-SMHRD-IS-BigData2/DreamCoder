package com.slt.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class M_Board {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment 
	private Long m_num; 
	@Column(length = 100, nullable = false)
	private String m_writer;
	@Column(length = 1000, nullable = false)
	private String m_content;
	@Column(length = 100, nullable = false)
	private String m_date;
	@Column(nullable = false)
	private long m_view;
	@Column(length = 100, nullable = false)
	private String m_region;
	@Column(nullable = false)
	private long m_progress;
	
	
}
