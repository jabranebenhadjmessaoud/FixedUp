import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { WorkerProfileComponent } from './worker-profile/worker-profile.component';
import { CategoriesComponent } from './categories/categories.component';
import { WelderslistComponent } from './welderslist/welderslist.component';
import { PlumberslistComponent } from './plumberslist/plumberslist.component';
import { MechanicslistComponent } from './mechanicslist/mechanicslist.component';
import { ElectricianslistComponent } from './electricianslist/electricianslist.component';
import { ConstructorslistComponent } from './constructorslist/constructorslist.component';
import { CarpenterslistComponent } from './carpenterslist/carpenterslist.component';
import { PostFormComponent } from './post-form/post-form.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';


export const routes: Routes = [

    {path:"",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"clientprofile",component:ClientProfileComponent},
    {path:"workerprofile/:id",component:WorkerProfileComponent},
    {path:"categories",component:CategoriesComponent},
    {path:"welders",component:WelderslistComponent},
    {path:"plumbers",component:PlumberslistComponent},
    {path:"mechanics",component:MechanicslistComponent},
    {path:"electricians",component:ElectricianslistComponent},
    {path:"constructors",component:ConstructorslistComponent},
    {path:"carpenters",component:CarpenterslistComponent},
    {path:"newpost",component:PostFormComponent},
    {path:"appointment/:id",component:AppointmentComponent},
    {path:"editprofile",component:EditProfilComponent},
]


