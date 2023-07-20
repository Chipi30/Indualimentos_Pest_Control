package com.example.indupestback.Controllers;

import com.example.indupestback.Models.Administrator;
import com.example.indupestback.Services.AdministratorService;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdministratorService adminService;

    @PostMapping("/saveAdmin")
    public Administrator saveAdmin(@RequestBody Administrator admin) {
        try {
            String hash = BCrypt.hashpw(admin.getPassword(), BCrypt.gensalt());
            admin.setPassword(hash);
            return adminService.saveAdministrator(admin);
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/listAdmin")
    public List<Administrator> listAdmin() {
        return adminService.listAdmins();
    }

    @PutMapping("/updateAdmin")
    public Optional<Administrator> updateStudent(@RequestBody Administrator admin){
        Optional<Administrator> findAdmin = adminService.findAdminById(admin.getCedula());

        if(findAdmin.isPresent()) {
            return Optional.of(saveAdmin(admin));
        }else {
            return null;
        }
    }

    @PostMapping("/login")
    public boolean login(@RequestBody Administrator admin) {
        List<Administrator> admins = adminService.listAdmins();
        for(Administrator ad: admins){
            if(ad.getUserName().toUpperCase().equals(admin.getUserName().toUpperCase())) {
                //System.out.println(admin.getPassword());
                //System.out.println(ad.getPassword());
                boolean matches = BCrypt.checkpw(admin.getPassword(), ad.getPassword());
                if(matches) {
                    return true;
                }
            }
        }
        return false;
    }

}
