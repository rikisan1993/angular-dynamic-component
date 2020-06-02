import { Component, Input, ViewChild, ComponentFactoryResolver, OnInit, OnDestroy } from '@angular/core';
import { AdItem } from 'src/app/models/ad-item';
import { AdDirective } from 'src/app/directives/ad.directive';
import { AdComponent } from 'src/app/models/ad-component';

@Component({
    selector: 'dang-ad-banner',
    templateUrl: './ad-banner.component.html',
    styleUrls: ['./ad-banner.component.scss']
})

export class AdBannerComponent implements OnInit, OnDestroy {
    @Input() ads: AdItem[];
    currentAdIndex:number = -1;
    @ViewChild(AdDirective, { static: true }) adHost: AdDirective;
    interval: any;

    constructor(private resolver: ComponentFactoryResolver) { }

    ngOnInit() {
        this.loadComponent();
        this.getAds();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    public loadComponent() {
        this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        const adItem = this.ads[this.currentAdIndex];

        const componentFactory = this.resolver.resolveComponentFactory(adItem.component);

        const viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<AdComponent>componentRef.instance).data = adItem.data;
    }

    getAds() {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 3000)
    }
}