import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { NuestroTrabajoComponent } from './pages/nuestro-trabajo/nuestro-trabajo.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { PostComponent } from './pages/post/post.component';
import { SecretComponent } from './pages/secret/secret.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipo', component: PersonalComponent },
  { path: 'nuestro-trabajo', component: NuestroTrabajoComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'secret', component: SecretComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
