import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  public data = [] as any
  constructor(private cov: CovidService) { }
  async ngOnInit(): Promise<void> {
    this.data = await this.cov.getdata('');
  }
}
