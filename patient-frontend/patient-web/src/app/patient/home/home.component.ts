import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Patient } from '../patient.interface';
import { PatientService } from '../patient.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { PatientFormComponent } from '../patient-form/patient-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatSortModule, 
    MatPaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'dateOfBirth', 'email', 'phone', 'address', 'edit', 'delete'];   /*È un array che specifica i nomi delle colonne che verranno visualizzati */
  patients: Patient[] = [];                            /*Array che memorizzerà tutti i pazienti, nel mio caso sarà popolato dopo la risposta del back-end*/
  filteredPatients: Patient[] = [];                    /**Array per memorizzare i pazienti filtrati */
  dataSource = new MatTableDataSource<Patient>();     

  firstName: String = '';
  lastName: String = '';
  dateOfBirth: String = '';
  email: String = '';
  phone: String = '';
  address: String = '';

  patient:Patient={
    id: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    address: ''
  }

  readonly dialog = inject(MatDialog);
  @ViewChild(MatSort) sort: any;
  @ViewChild(MatPaginator) paginator: any;


  constructor(private patientService:PatientService){}

  /**METODI */

  ngAfterViewInit(): void { /**Questo metodo inizializza la tabella popolandola */
    this.patientService.fetchAllPatients().subscribe((data) => {
      this.patients = data;
      this.dataSource = new MatTableDataSource<Patient>(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  
  filterPatients(input:string){ /**Questo metodo filtra i pazienti in base al testo inserito */
      this.filteredPatients=this.patients.filter(item=>
        item.firstName.toLowerCase().includes(input.toLowerCase()) ||
        item.lastName.toLowerCase().includes(input.toLowerCase())  ||
        item.dateOfBirth.toLowerCase().includes(input.toLowerCase()) ||
        item.email.toLowerCase().includes(input.toLowerCase())  ||
        item.address.toLowerCase().includes(input.toLowerCase()));
      this.dataSource = new MatTableDataSource<Patient>(this.filteredPatients);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
  }

  openPatDialog(patient:Patient): void{
    const dialogRef = this.dialog.open(PatientFormComponent,{
      data:patient
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result!==undefined){
        this.patient.id = result.id;
        this.patient.firstName = result.firstName;
        this.patient.lastName = result.lastName;
        this.patient.dateOfBirth = result.dateOfBirth;
        this.patient.email = result.email;
        this.patient.phone = result.phone;
        this.patient.address = result.address;
      }
    });
  }

  deletePatient(id: Number){
    const isConfirmed = window.confirm("Are you sure you want to Delete?");

    if(isConfirmed){
      this.patientService.deletePatient(id).subscribe(data=>{
        this.patients=this.patients.filter(item=>item.id!==id);
      })
      window.location.reload();
    }

  }
}
