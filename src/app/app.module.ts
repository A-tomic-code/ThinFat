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
import { NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CardBlogPipe } from './pipes/card-blog.pipe';
import { SecretComponent } from './pages/secret/secret.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecretFormComponent } from './components/secret-form/secret-form.component';
import { SecretPanelComponent } from './components/secret-panel/secret-panel.component';
import { BlogMenuComponent } from './components/blog-menu/blog-menu.component';
import { PostComponent } from './pages/post/posts.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { postsReducer } from './state/reducers/post.reducer';
import { ROOT_REDUCER } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './state/effects/posts.effects';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';

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
    CardPostComponent,
    CarouselComponent,
    CardBlogPipe,
    SecretComponent,
    SecretFormComponent,
    SecretPanelComponent,
    BlogMenuComponent,
    PostComponent,
    FloatingButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    FormsModule,
    NgbCollapseModule,
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({ name:'TEST' }),
    EffectsModule.forRoot([
      PostsEffects
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
