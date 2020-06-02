import { Component, Input } from '@angular/core';
import { AdComponent } from 'src/app/models/ad-component';

@Component({
    templateUrl: './hero-profile.component.html',
    styleUrls: ['./hero-profile.component.scss']
})

export class HeroProfileAdComponent implements AdComponent {
    @Input() data:any;
}