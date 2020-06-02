import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroJobAdComponent } from './components/hero-job/hero-job.component';
import { HeroProfileAdComponent } from './components/hero-profile/hero-profile.component';
import { AdService } from './services/ad.service';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { AdDirective } from './directives/ad.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileAdComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ AdService ],
  bootstrap: [AppComponent],
  entryComponents: [
    HeroJobAdComponent,
    HeroProfileAdComponent
  ]
})
export class AppModule { }
