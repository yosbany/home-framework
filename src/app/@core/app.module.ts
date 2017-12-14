import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthenticatedGuard } from './guards/authenticated.guard';

import { StaticInfoService } from './services/static-info.service';
import { AuthService } from './services/auth.service';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainComponent } from './components/layout/main/main.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { AccessDeniedComponent } from './components/pages/access-denied/access-denied.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ServerErrorComponent } from './components/pages/server-error/server-error.component';


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule
    ],
    declarations: [
        AppComponent,
        FooterComponent,
        MainComponent,
        HomeComponent,
        HeaderComponent,
        SidebarComponent,
        LoginComponent,
        SignupComponent,
        AccessDeniedComponent,
        NotFoundComponent,
        ServerErrorComponent
    ],
    providers: [
        StaticInfoService,
        AuthenticatedGuard,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
