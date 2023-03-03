import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TailwindTmplComponent } from './tailwind-tmpl/tailwind-tmpl.component';

const routes: Routes = [
  {
    path: 'template',
    component: TailwindTmplComponent,
    pathMatch: 'full',
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'oauth',
    loadChildren: () => import('./oauth/oauth.module').then((m) => m.OauthModule),
  },
  {
    path: '',
    redirectTo: 'template',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
