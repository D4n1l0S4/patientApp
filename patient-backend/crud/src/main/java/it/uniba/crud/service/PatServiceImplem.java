package it.uniba.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.uniba.crud.entity.Patient;
import it.uniba.crud.repository.PatientRepository;

@Service
public class PatServiceImplem implements PatientService{

	@Autowired
	private PatientRepository patientRepository;
	
	@Override
	public List<Patient> fetchAllPatient() {
		return (List<Patient>) patientRepository.findAll();
	}

	@Override
	public Patient fetchById(Long id) {
		return patientRepository.findById(id).get();
	}

	@Override
	public Patient createPatient(Patient patient) {
		return patientRepository.save(patient);
	}

	@Override
	public Patient updatePatient(Patient patient) {
		return patientRepository.save(patient);
	}

	@Override
	public String deletePatient(Patient patient) {
		patientRepository.delete(patient);
		return "Patient is Deleted Successfully for id:"+patient.getId();
	}
	

}
