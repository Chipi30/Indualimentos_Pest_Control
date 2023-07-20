package com.example.indupestback.Services;

import com.example.indupestback.Models.Administrator;
import com.example.indupestback.Repository.RepositoryAdministrator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdministratorService {

    @Autowired
    private RepositoryAdministrator repositoryAdmin;

    //guardar
    public Administrator saveAdministrator (Administrator admin) {
        repositoryAdmin.save(admin);
        return admin;
    }
    //listar todos los administradores
    public List<Administrator> listAdmins(){
        return (List<Administrator>) repositoryAdmin.findAll();
    }

    //buscar y mostar por id
    public Optional<Administrator> findAdminById(String id) {
        return repositoryAdmin.findById(id);
    }

}
