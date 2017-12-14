import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ServerErrorComponent } from './components/pages/server-error/server-error.component';
import { AccessDeniedComponent } from './components/pages/access-denied/access-denied.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

import { AuthenticatedGuard } from './guards/authenticated.guard';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthenticatedGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'error', component: ServerErrorComponent },
    { path: 'access-denied', component: AccessDeniedComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
