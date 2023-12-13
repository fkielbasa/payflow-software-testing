package com.example.payflow.DTO;

import com.example.payflow.user.Role;

public class UserDTO {
    private String firstname;
    private String lastname;
    private String login;
    private String password;
    private String role;

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return Role.valueOf(role);
    }

    public void setRole(String role) {
        this.role = role;
    }
}



