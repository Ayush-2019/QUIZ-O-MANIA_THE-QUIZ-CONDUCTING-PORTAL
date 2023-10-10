package com.exam.exam_portal;

import com.exam.exam_portal.models.Role;
import com.exam.exam_portal.models.User;
import com.exam.exam_portal.models.UserRole;
import com.exam.exam_portal.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class ExamPortalApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {


		SpringApplication.run(ExamPortalApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Start");

		// commenting so that it doesn't repeat
		User user = new User();

		user.setFirstName("Ayush");
		user.setLastName("Kiledar");
		user.setUsername("checckrunner");
		user.setPassword(this.bCryptPasswordEncoder.encode("12345"));
		user.setEmail("abc@gmail.com");
		user.setProfile("nbmv");

		Role r1 = new Role();
		r1.setRoleid(12L);
		r1.setRoletype("ADMIN");

		Set<UserRole> userRoleSet = new HashSet<>();
		UserRole userRole = new UserRole();
		userRole.setRole(r1);
		userRole.setUser(user);
		userRoleSet.add(userRole);

		User u1 = this.userService.createUser(user, userRoleSet);

		System.out.println(u1.getUsername());
	}
}
