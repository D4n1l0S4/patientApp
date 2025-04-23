import { Routes } from '@angular/router';
import { HomeComponent } from './patient/home/home.component';


/**
 * Definisco i componenti che devono essere mostrati a schermo 
 * quando l'utente inserisce un certo path/URL.
 */
export const routes: Routes = [
    {path:"patient/home", component:HomeComponent},
    {path:"patient", redirectTo: "patient/home", pathMatch:"full"}, /**se l'utente scrive URL/patient viene reindirizzato a URL/patient/home cioè a quello di sopra e viene mostrato il componente HomeComponent*/
    {path:"", redirectTo: "patient/home", pathMatch:"full"},        /**se l'utente scrive URL viene reindirizzato a URL/patient/home cioè a quello di sopra e viene mostrato il componente HomeComponent*/
];
