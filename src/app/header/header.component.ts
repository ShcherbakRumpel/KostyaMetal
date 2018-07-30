import { Component, OnInit, Output, EventEmitter, Input, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private eRef: ElementRef, private _router: Router) {
    _router.events.subscribe((val: any) => {
      console.log(val.url);
      if (val.url === '/home') {
        this.setState(true, false, false, false, false);
      }
      if (val.url === '/contact') {
        this.setState(false, true, false, false, false);

      }
      if (val.url === '/provolochnaia') {
        this.setState(false, false, true, false, false);

      }
      if (val.url === '/proshivnaia') {
        this.setState(false, false, false, true, false);

      }
      if (val.url === '/about') {
        this.setState(false, false, false, false, true);

      }
    });
  }

  setState(isHome: boolean,
    isContact: boolean,
    isProv: boolean,
    isPorsh: boolean,
    isAbout: boolean, ) {
    this.isHome = isHome;
    this.isContact = isContact;
    this.isProv = isProv;
    this.isPorsh = isPorsh;
    this.isAbout = isAbout;
  }
  // tslint:disable-next-line:member-ordering
  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  // tslint:disable-next-line:member-ordering
  isBurgerMenuOpened: boolean;
  // tslint:disable-next-line:member-ordering
  isHome: boolean;
  // tslint:disable-next-line:member-ordering
  isContact: boolean;
  // tslint:disable-next-line:member-ordering
  isProv: boolean;
  // tslint:disable-next-line:member-ordering
  isPorsh: boolean;
  // tslint:disable-next-line:member-ordering
  isAbout: boolean;
  ngOnInit() {
    this.isBurgerMenuOpened = false;

  }

  onBurgerClick = () => {
    this.isBurgerMenuOpened = this.isBurgerMenuOpened ? false : true;
    this.sendDataToParent();
  }

  sendDataToParent(): void {
    this.notify.emit(this.isBurgerMenuOpened);
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      console.log('clicked inside');
    } else {
      console.log('clicked outside');
      this.isBurgerMenuOpened = false;
    }
  }

}
