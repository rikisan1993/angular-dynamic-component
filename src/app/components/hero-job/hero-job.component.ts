import { Component, Input } from '@angular/core';
import { AdComponent } from 'src/app/models/ad-component';

@Component({
    templateUrl: './hero-job.component.html',
    styleUrls: ['./hero-job.component.scss']
})

export class HeroJobAdComponent implements AdComponent {
    @Input() data:any;
}