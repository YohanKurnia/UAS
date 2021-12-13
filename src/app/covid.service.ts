import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CovidService {
  main = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia';
  values = [] as object;
  constructor() { }
  async getdata(extra: string){
    this.values = await fetch(this.main+extra).then(result => result.json()).catch((error) => {console.log(error)})
    return this.values;
  }
}
