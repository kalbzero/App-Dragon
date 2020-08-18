import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteEnum } from './shared/enum/route-enum';
import { DragonFormComponent } from './dragon/dragon-form/dragon-form.component';
import { DragonListComponent } from './dragon/dragon-list/dragon-list.component';

const routes: Routes = [
  {
    path: RouteEnum.EMPTY,
    children: [
      {
        path: RouteEnum.EMPTY,
        component: DragonListComponent
      },
      {
        path: 'add',
        component: DragonFormComponent,
      },
      {
        path: 'edit/:id',
        component: DragonFormComponent,
      }
    ]
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
