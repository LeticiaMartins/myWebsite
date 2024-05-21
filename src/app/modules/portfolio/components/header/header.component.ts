import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  text!: HTMLElement;

  ngOnInit(): void {
    this.text = document.querySelector(".span") as HTMLElement;
    this.textLoad();

    setInterval(() => {
      this.textLoad();
    }, 16000);
  }

   textLoad = (): void  => {
    setTimeout(() => {
      this.text.textContent = "Junior Full Stack Developer";
    }, 0);

    setTimeout(() => {
      this.text.textContent = "Data Analysis Student";
    }, 4000);

    setTimeout(() => {
      this.text.textContent = "Computer Science Student";
    }, 8000);

    setTimeout(() => {
      this.text.textContent = "Passionate about technology";
    }, 12000);
  }

}
