import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  isBurgerMenuOpened: boolean;
  ngOnInit() {
  }
  getData(result: boolean) {
    this.isBurgerMenuOpened = result;
  }

}
