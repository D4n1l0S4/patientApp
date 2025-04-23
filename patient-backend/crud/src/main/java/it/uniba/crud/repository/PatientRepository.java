package it.uniba.crud.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import it.uniba.crud.entity.Patient;

@Repository
public interface PatientRepository extends CrudRepository<Patient, Long>{
/*
 * permette di interagire con il db usando metodi già implementati da Spring
 * come ad esempio: findAll(), findById(), Save(), delete(), etc... 
 */
}
