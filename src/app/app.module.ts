import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidService } from './covid.service';
import { DataComponent } from './data/data.component';
import { TotalComponent } from './total/total.component';
import { ProvinsiComponent } from './provinsi/provinsi.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    TotalComponent,
    ProvinsiComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CovidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
