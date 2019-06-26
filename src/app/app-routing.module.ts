import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home/home.component';
import { DetailComponent } from './component/detail/detail/detail.component';
import { PATH_HOME, PATH_DETAIL, PATH_DETAIL_FORMATIONS, PATH_DETAIL_SKILLS } from './app-routing.constantes';
import { FormationComponent } from './component/formation/formation.component';
import { ConnaissancesComponent } from './component/connaissances/connaissances.component';
import { LoggedInGuardGuard } from './logginGuard';


export const routes: Routes = [
  { path: PATH_HOME, component: HomeComponent },
  {
    path: PATH_DETAIL + '/:idDetail', component: DetailComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: PATH_DETAIL_FORMATIONS },
      { path: PATH_DETAIL_FORMATIONS ,component: FormationComponent },
      { path: PATH_DETAIL_SKILLS, component: ConnaissancesComponent, canActivate: [LoggedInGuardGuard] },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
