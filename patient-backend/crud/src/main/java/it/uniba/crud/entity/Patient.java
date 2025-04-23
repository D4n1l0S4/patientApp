package it.uniba.crud.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

@Data 					/*serve a lombok per generare automaticamente getter e setter ed altri metodi*/
@AllArgsConstructor		/*serve a lombok per creare un costruttore con tutti i campi come parametri*/
@NoArgsConstructor		/*serve a lombok per creare un costruttore senza parametri*/
@Builder				/*serve sempre a lombok per creare costruttori */
@Entity					/*indica che questa classe rappresenta una tabella nel DB*/
@Table(name = "patient", schema = "public") /*specifica il nome della table e dello schema nel DB a cui mappare questa classe*/

public class Patient {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@Column(name = "first_name", length = 250)
	private String firstName;
	
	@Column(name = "last_name", length = 250)
	private String lastName;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name = "date_of_birth")
	private LocalDate dateOfBirth;
	
	@Column(name = "email", length = 250)
	private String email;
	
	@Column(name = "phone", length = 20)
	private String phone;
	
	@Column(name = "address", length = 200)
	private String address;
	
	
	public Long getId() {
	    return this.id;
	}
	
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    
    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
    
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
    
}
