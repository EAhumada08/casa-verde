import { Routes } from '@angular/router';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { HomeComponent } from './components/home/home.component';
export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: '', redirectTo:'/home', pathMatch: "full"  }
];
