import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SampleEventComponent } from './components/sample-event/sample-event.component';
import { MandvoComponent } from './components/mandvo/mandvo.component';
import { SanjiComponent } from 'src/app/components/sanji/sanji.component';
import { MameraComponent } from 'src/app/components/mamera/mamera.component';
import { MarriageComponent } from 'src/app/components/marriage/marriage.component';
import { DandiyaComponent } from 'src/app/components/dandiya/dandiya.component';
import { PerformanceNightComponent } from 'src/app/components/performance-night/performance-night.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'mandapRopan', component: MandvoComponent
  },
  {
    path: 'sanji', component: SanjiComponent
  },
  {
    path: 'mamera', component: MameraComponent
  },
  {
    path: 'performanceNight', component: PerformanceNightComponent
  },
  {
    path: 'dandiya', component: DandiyaComponent
  },
  {
    path: 'marriage', component: MarriageComponent
  },
  {
    path: 'sampleEvent', component: SampleEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
