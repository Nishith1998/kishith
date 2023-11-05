import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { EventListComponent } from './components/event-list/event-list.component';
// import { AddEventComponent } from './components/add-event/add-event.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
// import { NavigationItemsComponent } from './components/navigation-items/navigation-items.component';
import { CommonModule } from '@angular/common';
// import { SampleEventComponent } from './components/sample-event/sample-event.component';
import { MandvoComponent } from './components/mandvo/mandvo.component';
import { RemoveAfterDirective } from './directives/remove-after.directive';
import { ShowAfterDirective } from './directives/show-after.directive';
import { SanjiComponent } from 'src/app/components/sanji/sanji.component';
import { MameraComponent } from './components/mamera/mamera.component';
import { PerformanceNightComponent } from './components/performance-night/performance-night.component';
import { DandiyaComponent } from './components/dandiya/dandiya.component';
import { MarriageComponent } from './components/marriage/marriage.component';
import { EveryPipe } from './pipes/every.pipe';
import { MessagingModule } from '@angular/fire/messaging';
import { initializeApp } from 'firebase/app';
import { ServiceWorkerModule } from '@angular/service-worker';
import { GroomComponent } from './components/groom/groom.component';
import { BrideComponent } from './components/bride/bride.component';
import { HaldiComponent } from './components/haldi/haldi.component';
import { ImageModule } from 'primeng/image'; 

// AngularFireModule.initializeApp(environment.firebase);
const app = initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MandvoComponent,
    RemoveAfterDirective,
    ShowAfterDirective,
    SanjiComponent,
    MameraComponent,
    PerformanceNightComponent,
    DandiyaComponent,
    MarriageComponent,
    EveryPipe,
    GroomComponent,
    BrideComponent,
    HaldiComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ImageModule,
    MessagingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }), // for firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
