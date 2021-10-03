package com.exam.Entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
/*IT DEFINE THE ROLE
* NORMAL USER AND ADMIN USER*/

@Entity
public class Role {
    @Id
    private Long roleId;
    private String rolename;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY,mappedBy = "role")
    private Set<UserRole> userRoleSet=new HashSet<>();

    public Set<UserRole> getUserRoleSet() {
        return userRoleSet;
    }

    public void setUserRoleSet(Set<UserRole> userRoleSet) {
        this.userRoleSet = userRoleSet;
    }

    public Role() {
    }

    public Role(Long roleId, String rolename) {
        this.roleId = roleId;
        this.rolename = rolename;
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public String getRolename() {
        return rolename;
    }

    public void setRolename(String rolename) {
        this.rolename = rolename;
    }
}
