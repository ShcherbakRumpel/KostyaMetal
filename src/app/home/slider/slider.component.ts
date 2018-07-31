import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {

  slideIndex = 1;
  ngOnInit(): void {
    this.showDivs(this.slideIndex);
  }
  plusDivs = (n) => {
    this.showDivs(this.slideIndex += n);
  }

  private showDivs = (n) => {
    let i;
    const x = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;
    if (n > x.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = x.length; }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    x[this.slideIndex - 1].style.display = 'block';
  }
}
