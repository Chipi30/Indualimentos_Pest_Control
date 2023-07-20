package com.example.indupestback.Repository;

import com.example.indupestback.Models.Administrator;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryAdministrator extends CrudRepository <Administrator, String> {
}
