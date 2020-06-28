import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from '../services/covidservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allData:any;
  globalData:any;
  interval:any;
  constructor(private covidservice:CovidserviceService) { }

  ngOnInit() {
    this.covidData();
   
  }

  covidData(){
    this.covidservice.getCovidData().subscribe(data=>{
      this.allData = data;
      this.globalData = this.allData.Global;
      console.log(this.allData);

    });
  }

}
