import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from '../services/covidservice.service';

@Component({
  selector: 'app-helpline-india',
  templateUrl: './helpline-india.component.html',
  styleUrls: ['./helpline-india.component.scss']
})
export class HelplineIndiaComponent implements OnInit {
  helplineData:any;
  constructor(private covidservice:CovidserviceService) { }

  ngOnInit() {
    // this.covidservice.getHelplineData().subscribe(data=>{
    //   this.helplineData = data;
    //   console.log(this.helplineData);

    // });
  }

}
