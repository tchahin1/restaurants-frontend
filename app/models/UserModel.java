package models;

public class UserModel {
    private String name;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String country;
    private String city;
    private String password;

    public UserModel(String name, String last_name, String email, String phone_num, String country, String city, String password) {
        this.name = name;
        this.lastName = last_name;
        this.email = email;
        this.phoneNumber = phone_num;
        this.country = country;
        this.city = city;
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String last_name) {
        this.lastName = last_name;
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

    public void setPhoneNumber(String phone_num) {
        this.phoneNumber = phone_num;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
