import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { DragonListComponent } from './dragon/dragon-list/dragon-list.component';
import { DragonFormComponent } from './dragon/dragon-form/dragon-form.component';
import { DeleteDialogComponent } from './dragon/dragon-list/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DragonListComponent,
    DragonFormComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  entryComponents: [DeleteDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
