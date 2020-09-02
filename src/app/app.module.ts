import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormFirstComponent } from './form-first/form-first.component';
import { FormsModule } from '@angular/forms';
import { IncidenciasService } from './incidencias.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FormFirstComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [IncidenciasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
