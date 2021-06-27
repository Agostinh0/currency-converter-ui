import { Component, OnInit } from '@angular/core';
import { ConversionService } from './services/conversion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'currency-converter';

  constructor(private service:ConversionService){}

  ngOnInit(): void {
    this.getCurrencies();
  }

  from: any;
  to: any;
  rate: any;
  currencies: any;

  async convert(amount, from, to){
    await this.service.getRate(from, to).toPromise().then(data => {
      if(data.hasOwnProperty(`${from}_${to}`)){
        this.rate = data[`${from}_${to}`];
      }
    });

    alert(`${amount} ${from} equivale a ${amount * this.rate} ${to} hoje`)
  }

  async getCurrencies(){
    await this.service.getCurrencies().toPromise().then(data => {
      if(data.hasOwnProperty('results')){
        this.currencies = Object.keys(data['results']).sort();
      }
    });
  }
}
