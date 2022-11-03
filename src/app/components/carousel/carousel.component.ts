import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers:[NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  @Input() images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) { 

    config.interval = 2000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
    config.animation = false

  }

  ngOnInit(): void {
  }

}
