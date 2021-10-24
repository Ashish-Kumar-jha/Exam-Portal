import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminguardGuard } from './services/adminguard.guard';
import { NormalguardGuard } from './services/normalguard.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path:'navbar',
    component:NavbarComponent,
    pathMatch:'full',
  },

  {
    path:'admin',
    component:DashboardComponent,
    // pathMatch:'full',
    canActivate:[AdminguardGuard],
    children:[
      {
      path:'profile',
      component:ProfileComponent,
      },
      {
        path:'',
        component:WelcomeComponent,
        },
        {
          path:'categories',
          component:ViewCategoriesComponent,
          pathMatch:'full',
        },
        {
          path:'add-categories',
          component:AddCategoriesComponent,
          pathMatch:'full',
        },
        {
          path:'quizzes',
          component:ViewQuizzesComponent,
          pathMatch:'full',
        },
        {
          path:'add-quiz',
          component:AddQuizComponent,
          pathMatch:'full',
        },
    ],
  },



  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalguardGuard],
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
