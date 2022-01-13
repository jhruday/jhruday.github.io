import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banks } from './BankData';

@Injectable()
export class bankApi {
    constructor(private http: HttpClient) { }

    getBankDataLarge() {
        return this.http.get<any>('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI')
            .toPromise()
            .then(data => { return data; });
    }

    getBankDataLargeDrop(City: any) {
        return this.http.get<any>('https://vast-shore-74260.herokuapp.com/banks?city='+City)
            .toPromise()
            .then(data => { return data; });
    }
}