import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { bankApi } from './BankApi';
import { Banks, city } from './BankData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bankSearch';
  banks: Banks[];
  City:city[];
  loading: boolean = true;
  constructor(private Bankservice: bankApi,private primengConfig: PrimeNGConfig,public http:HttpClient) { }

  @ViewChild('dt') table: Table;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.Bankservice.getBankDataLarge().then(customers => {
      this.banks = customers;
      this.loading = false;
  });
  

  this.City=[ 
    {name: "MUMBAI", code: 'MUMBAI'},
    {name: "HYDERABAD", code: 'HYDERABAD'},
    {name: "DELHI", code: 'DELHI'},
    {name: "BANGALORE", code: 'BANGALORE'},
    {name: "CHENNAI", code: 'CHENNAI'}
  ]
  }

  onCityChange(event:any){

    this.Bankservice.getBankDataLargeDrop(event).then(customers => {
      this.banks = customers;
      this.loading = false;
  });
  }

}
