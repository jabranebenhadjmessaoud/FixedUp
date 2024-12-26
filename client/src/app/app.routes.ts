import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { WorkerProfileComponent } from './worker-profile/worker-profile.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostFormComponent } from './post-form/post-form.component';


export const routes: Routes = [

    {path:"",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"clientprofile",component:ClientProfileComponent},
    {path:"workerprofile",component:WorkerProfileComponent},
    {path:"categories",component:CategoriesComponent},
    {path:"newpost",component:PostFormComponent}
]