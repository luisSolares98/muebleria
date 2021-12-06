import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { IndexComponent } from './pages/index/index.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';

const routes: Routes = [  
  {
    path: '', redirectTo: "/login", pathMatch:"full"
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'singUp', component: SignUpComponent
  },
  {
    path: 'index', component: IndexComponent
  },
  {
    path: 'catalogo', component: CatalogoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
