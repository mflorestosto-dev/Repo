package com.api.apirest.repositories;

import com.api.apirest.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserModelRepository extends JpaRepository<UserModel, Long> {

    
} 