import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth-guard.service';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'master-list',
        loadChildren: () => import('../master-list/master-list.module').then((m) => m.MasterListPageModule)
      },
      {
        path: 'people',
        loadChildren: () => import('../people/people.module').then((m) => m.PeoplePageModule)
      },
      {
        path: 'planets',
        loadChildren: () => import('../planets/planets.module').then((m) => m.PlanetsPageModule)
      },
      {
        path: 'films',
        loadChildren: () => import('../films/films.module').then((m) => m.FilmsPageModule)
      },
      {
        path: 'species',
        loadChildren: () => import('../species/species.module').then((m) => m.SpeciesPageModule)
      },
      {
        path: 'vehicles',
        loadChildren: () => import('../vehicles/vehicles.module').then((m) => m.VehiclesPageModule)
      },
      {
        path: 'starships',
        loadChildren: () => import('../starships/starships.module').then((m) => m.StarshipsPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/master-list',
    pathMatch: 'full',
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
