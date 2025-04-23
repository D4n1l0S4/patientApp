import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Patient } from '../patient.interface';
import { PatientService } from '../patient.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [MatDialogModule, MatDialogTitle, MatDialogContent, MatDialogActions, 
    MatButtonModule, MatIconModule, MatFormFieldModule, MatIconModule, MatInputModule, MatDialogClose, CommonModule, FormsModule],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.css'
})

export class PatientFormComponent {
  readonly dialogRef = inject(MatDialogRef<PatientFormComponent>);
  data = inject<Patient>(MAT_DIALOG_DATA);

  constructor(private patientService: PatientService){}
  
  addOrEditPatients(patient: Patient){
    console.log("Dati che arrivano nel submit:", patient);
    
    if(patient.id!==0){
      this.patientService.updatePatient(patient).subscribe({
        next:(data)=>{
          console.log("Patient Updated Successfully!");
          window.location.reload();
        }, 
        error:(err) =>{
          console.log(err);
        }
      })
    }else{      
      this.patientService.createPatient(patient).subscribe({
        next:(data)=>{
          console.log("Patient Created Successfully!");
          window.location.reload();
        }, 
        error:(err) =>{
          console.log(err);
        }
      })
    }
  }
}
