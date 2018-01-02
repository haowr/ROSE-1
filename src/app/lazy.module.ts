import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './components/components/clients/clients.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes=[

{
  path: '',
  component: ClientsComponent

}

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [
    ClientsComponent
  ]
})
export class LazyModule { }
