import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/landing/landing.module').then(m => m.LandingModule) },
    {
      path: 'Auth/login',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    },
    {
      path: 'Project',
      loadChildren: () => import('./feature/project/project.module').then(m => m.ProjectModule),
    },{
      path: 'ProjectTime',
      loadChildren: () => import('./feature/project-time/project-time.module').then(m => m.ProjectTimeModule),
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
