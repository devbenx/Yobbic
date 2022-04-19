import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { MasterListPage } from './pages/master-list/master-list.page';
import { AuthGuard } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';

const routes: Routes = [

      {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
      },
      {
            path: 'login',
            loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
      },
      {
            path: 'menu/master-list/:id',
            loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsPageModule),
            canActivate: [AuthGuard] //only if login
      },
      {
            path: 'menu',
            loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule),
            canActivate: [AuthGuard] //only if login
      },

];

@NgModule({
      imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
      ],
      exports: [RouterModule]
})
export class AppRoutingModule {
      constructor(private router: Router) {

            function OnWhichRedirectShouldHappen() {
                  router.navigate(['/role']);
            }
      }
}
