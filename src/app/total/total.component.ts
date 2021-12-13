import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  public data = [] as any
  bulan: string
  hari:string
  tab: number;
  jenis: string
  constructor(private cov: CovidService) {
    this.bulan = '2020-03'
    this.tab = 1;
    this.hari = ''
    this.jenis = 'b'
  }
  async ngOnInit(): Promise<void> {
    this.data = await this.cov.getdata('/harian');
  }
  perbulan():void{
    this.jenis = 'b';
    this.hari = '';
    this.bulan = '2020-03'
  }
  perhari():void{
    this.jenis = 'h';
    this.bulan = '';
    this.hari = '2020-03-02'
  }
}
