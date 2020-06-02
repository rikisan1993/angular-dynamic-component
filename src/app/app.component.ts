import { Component, OnInit } from '@angular/core';
import { AdService } from './services/ad.service';
import { AdItem } from './models/ad-item';

@Component({
  selector: 'dang-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-dynamic-component';
  ads: AdItem[];
  
  constructor(private adService: AdService) {

  }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
