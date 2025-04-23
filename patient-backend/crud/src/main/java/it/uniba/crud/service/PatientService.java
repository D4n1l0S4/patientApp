package it.uniba.crud.service;

import java.util.List;
import it.uniba.crud.entity.Patient;

/*
 * In un'app Spring Boot, un Service è il componente dove metti la logica dell'applicazione.
 * È una classe/Interfaccia che si occupa di cosa fare con i dati, ad esempio prendere tutti i pazienti dal database, 
 * salvarne uno nuovo, aggiornarne uno, ecc.
 * È usata dal Controller, che riceve le richieste HTTP e chiama il Service per "delegare il lavoro da svolgere".
 */

public interface PatientService {

	List<Patient> fetchAllPatient();
	Patient fetchById(Long id);
	Patient createPatient(Patient patient);
	Patient updatePatient(Patient patient);
	String deletePatient(Patient patient);
}
