package com.example.payflow.model;

import com.example.payflow.model.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user_details")
public class UserDetails {
    @Id
    @GeneratedValue
    @Column(name = "id_user_details")
    private Long id;

    private String email;
    @Column(name = "phone_number")
    private String phoneNumber;

//    @OneToOne
//    @MapsId
//    @JoinColumn(name = "user_id")
//    private User userId;
    @MapsId
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User userId;

}
