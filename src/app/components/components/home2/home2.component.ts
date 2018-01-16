import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class HomeComponent2 implements OnInit {
  name:string;
  age:number;
  temperatureNow:string="";
  weatherNow:string="";


  
  constructor(private weatherservice:WeatherService) {

   }

  ngOnInit() {
    this.name = 'ROSE';
        
    this.weatherservice.getWeather().subscribe(data=>{

      console.log(data)
     this.weatherNow =  data.weather[0].icon;
     this.temperatureNow = data.main.temp;
     console.log(this.weatherNow)

    })
      this.weatherservice.getTime().subscribe(data=>{

      console.log(data)
    

    })
  }

}
