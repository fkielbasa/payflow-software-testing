package com.example.payflow.user_details;

import com.example.payflow.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
@Entity
@Table(name = "user_details")
public class UserDetails {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_details"
    )
    @SequenceGenerator(
            name = "user_details",
            sequenceName = "user_details_sequence",
            allocationSize = 1
    )
    @Column(name = "id_user_details")
    private Long id;

    private String email;
    @Column(name = "phone_number")
    private String phoneNumber;

    @OneToOne
    @JoinColumn(name = "id_user")
    private User id_user;

    public UserDetails() {
    }

    public UserDetails(String email, String phoneNumber) {
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public Long getIdUser() {
        return id;
    }

    public void setIdUser(Long idUser) {
        this.id = idUser;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }


}
