import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DataComponent } from './data/data.component';
import { ProvinsiComponent } from './provinsi/provinsi.component';
import { TotalComponent } from './total/total.component';

const routes: Routes = [
  {path:'', component: DataComponent},
  {path:'harian', component: TotalComponent},
  {path:'provinsi',component:ProvinsiComponent},
  {path:'aboutus',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
