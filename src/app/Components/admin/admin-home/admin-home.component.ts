import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  yearscount:number = 0;
  workercount:number = 0;
  clientcount:number = 0;
  cleaningcount:number = 0;

  yearscountstop:any = setInterval(()=>{
    this.yearscount++;
    if(this.yearscount==10)
    {
      clearInterval(this.yearscountstop);
    }
  },315)

  workercountstop:any = setInterval(()=>{
    this.workercount++;
    if(this.workercount==50)
    {
      clearInterval(this.workercountstop);
    }
  },95)

  clientcountstop:any = setInterval(()=>{
    this.clientcount++;
    if(this.clientcount==250)
    {
      clearInterval(this.clientcountstop);
    }
  },20)

  cleaningcountstop:any = setInterval(()=>{
    this.cleaningcount++;
    if(this.cleaningcount==550)
    {
      clearInterval(this.cleaningcountstop);
    }
  },8)

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    dots: true,
    navSpeed: 700,
    navText: ['',''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

}
