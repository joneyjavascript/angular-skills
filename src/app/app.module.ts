import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatChipsModule, MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakeApiService } from './fake-api.service';
import { HelloComponent } from './hello.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatChipsModule, MatCardModule, HttpClientModule, InMemoryWebApiModule.forRoot(FakeApiService, {delay: 1000}),
    MatCardModule, FlexLayoutModule, MatIconModule
  ],
  declarations: [ AppComponent, HelloComponent, DashboardComponent, CardComponent, LoadingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
