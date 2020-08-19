import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteEnum } from './shared/enum/route-enum';
import { AuthGuard } from './shared/guard/auth.guard';
import { DragonFormComponent } from './dragon/dragon-form/dragon-form.component';
import { DragonListComponent } from './dragon/dragon-list/dragon-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: RouteEnum.EMPTY,
    children: [
      {
        path: RouteEnum.EMPTY,
        component: DragonListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add',
        component: DragonFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit/:id',
        component: DragonFormComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: RouteEnum.LOGIN,
    component:LoginComponent,
  },
  {
    path: RouteEnum.WILDCARD,
    redirectTo: RouteEnum.EMPTY,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
