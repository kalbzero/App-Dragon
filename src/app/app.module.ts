import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { DeleteDialogComponent } from './dragon/dragon-list/delete-dialog/delete-dialog.component';
import { DragonListComponent } from './dragon/dragon-list/dragon-list.component';
import { DragonFormComponent } from './dragon/dragon-form/dragon-form.component';
import { LoginComponent } from './login/login.component';
import { LoginFailureComponent } from './login/login-failure/login-failure.component';


@NgModule({
  declarations: [
    AppComponent,
    DragonListComponent,
    DragonFormComponent,
    DeleteDialogComponent,
    LoginComponent,
    LoginFailureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  entryComponents: [DeleteDialogComponent, LoginFailureComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
