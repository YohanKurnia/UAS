import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-provinsi',
  templateUrl: './provinsi.component.html',
  styleUrls: ['./provinsi.component.css']
})
export class ProvinsiComponent implements OnInit {
 
  public data = [] as any
  prov: string
  jenis: string
  constructor(private cov: CovidService) { 
    this.prov = '';
    this.jenis = '';
  }
  async ngOnInit(): Promise<void> {
    this.data = await this.cov.getdata('/provinsi/more?name='+this.prov);
  }

}
