import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { SampleEventComponent } from './components/sample-event/sample-event.component';
import { MandvoComponent } from './components/mandvo/mandvo.component';
import { SanjiComponent } from 'src/app/components/sanji/sanji.component';
import { MameraComponent } from 'src/app/components/mamera/mamera.component';
import { MarriageComponent } from 'src/app/components/marriage/marriage.component';
import { DandiyaComponent } from 'src/app/components/dandiya/dandiya.component';
import { PerformanceNightComponent } from 'src/app/components/performance-night/performance-night.component';
import { BrideComponent } from 'src/app/components/bride/bride.component';
import { GroomComponent } from 'src/app/components/groom/groom.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'bride', component: BrideComponent
  },
  {
    path: 'groom', component: GroomComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
