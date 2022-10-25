import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { NuestroTrabajoComponent } from './pages/nuestro-trabajo/nuestro-trabajo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CardPersonalComponent } from './components/card-personal/card-personal.component';
import { CardPostComponent } from './components/card-post/card-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    PersonalComponent,
    NuestroTrabajoComponent,
    NavbarComponent,
    HeaderComponent,
    CardPersonalComponent,
    CardPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
