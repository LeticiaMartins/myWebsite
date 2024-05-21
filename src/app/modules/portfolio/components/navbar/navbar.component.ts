import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    window.addEventListener('scroll', function () {
      let header: HTMLElement | null = document.querySelector('#header');
      header?.classList.toggle('rolagem', window.scrollY > 719);
    });
  }
}
