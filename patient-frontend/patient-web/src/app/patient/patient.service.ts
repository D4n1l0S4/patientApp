import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient.interface';


/**
 * È una classe di servizio, appunto chiamata Service, che serve per centralizzare in questo file
 * tutte le chiamate HTTP riguardanti i pazienti (es. ottenere tutti i pazienti, aggiungerli, eliminarli, ecc.)
 * Viene usata per separare la logica di accesso ai dati con il back-end dalla logica di presentazione nei componenti.
 * Puoi iniettare questo servizio in qualsiasi componente che ha bisogno di interagire con i dati dei pazienti, 
 * evitando la duplicazione del codice (come ho fatto nella homeComponent, che ha bisogno di ricevere tutti i dati dei pazienti
 * e quindi utilizza questo patienteService).
*/
@Injectable({
  providedIn: 'root'
})

export class PatientService {
  constructor(private _httpClient:HttpClient) { }     //Diamo HttpClient nel costruttore, così ci permette di fare chiamate HTTP (GET, POST, PUT, DELETE) al backend. */
  private baseUrl : String = "/api/v1/patients"       //Definisce l'URL di base per tutte le API relative ai pazienti

  /**
   * fetcAllPAtients è un metodo che non accetta parametri, restituisce un Observable<Patient[]> ed utilizza 
   * l'istanza _httpClient per effettuare una richiesta http di tipo GET 
   */
  fetchAllPatients():Observable<Patient[]>{     
    return this._httpClient.get<Patient[]>(`${this.baseUrl}`);
  }

  /**
   * 
   */
  createPatient(data: Patient){     
    return this._httpClient.post<Patient>(`${this.baseUrl}`, data);
  }

  updatePatient(data: Patient){     
    return this._httpClient.put<Patient>(`${this.baseUrl}/${data.id}`, data);
  }

  deletePatient(id: Number){     
    return this._httpClient.delete<Patient>(`${this.baseUrl}/${id}`);
  }
}
