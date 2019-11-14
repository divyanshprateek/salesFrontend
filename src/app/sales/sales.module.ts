import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { SalesService } from './sales.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SalesComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [SalesService]
})
export class SalesModule { }
