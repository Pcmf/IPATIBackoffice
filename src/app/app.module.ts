import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from '../app/services/login.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ChangepassComponent } from './changepass/changepass.component';
import { NavbarService } from './services/navbar.service';
import { LabComponent } from './lab/lab.component';
import { ManuaisComponent } from './manuais/manuais.component';
import { ServicosComponent } from './servicos/servicos.component';
import { SobreComponent } from './sobre/sobre.component';
import { UtilComponent } from './util/util.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ChangepassComponent,
    LabComponent,
    ManuaisComponent,
    ServicosComponent,
    SobreComponent,
    UtilComponent,
    ConsultasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'login' , component: LoginComponent},
      {path: 'lab' , component: LabComponent, canActivate: [AuthGuardService]},
      {path: 'man' , component: ManuaisComponent, canActivate: [AuthGuardService]},
      {path: 'servicos' , component: ServicosComponent, canActivate: [AuthGuardService]},
      {path: 'sobre' , component: SobreComponent, canActivate: [AuthGuardService]},
      {path: 'util' , component: UtilComponent, canActivate: [AuthGuardService]},
      {path: 'cons' , component: ConsultasComponent, canActivate: [AuthGuardService]},
      {path: 'change' , component: ChangepassComponent, canActivate: [AuthGuardService]},
      {path: '**', component: HomeComponent}
    ])
  ],
  providers: [
    LoginService,
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
