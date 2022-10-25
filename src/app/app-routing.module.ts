import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { NuestroTrabajoComponent } from './pages/nuestro-trabajo/nuestro-trabajo.component';
import { PersonalComponent } from './pages/personal/personal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipo', component: PersonalComponent },
  { path: 'nuestro-trabajo', component: NuestroTrabajoComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
