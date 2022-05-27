import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.css']
})
export class AdminAboutComponent implements OnInit {
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

}
