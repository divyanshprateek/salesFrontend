import { Component, OnInit, ElementRef } from "@angular/core";
import { SalesService } from "./sales.service";

@Component({
  selector: "app-sales",
  templateUrl: "./sales.component.html",
  styleUrls: ["./sales.component.css"]
})
export class SalesComponent implements OnInit {
  totalSales: string;
  months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  monthlySales: string;
  mostPopularItem: string;
  quantity: string;
  mostRev: string;
  popularItem: string;
  orders: string;
  max: string;
  min: string;
  average: string;
  items: any[];
  constructor(private salesService: SalesService) {}

  ngOnInit() {
    this.salesService.getTotalSales().subscribe(data => {
      this.totalSales = data.totalSales;
    });

    this.salesService.getMinMaxAverage().subscribe(data => {
      this.min = data.min;
      this.max = data.max;
      this.average = data.average;
    })

    this.salesService.getItems().subscribe(data=> {
      console.log(data);
      this.items = [...data];
      console.log(this.items);
    })
  }

  calculateMonthySales(element: ElementRef) {
    this.salesService.getMonthlySales(element.value).subscribe(data=> {
      this.monthlySales = data.monthlySales;
    })
  }

  findMostPopular(element: ElementRef) {
    this.salesService.getMostPopular(element.value).subscribe(data=> {
      this.mostPopularItem = data.item.name || 'No Item';
      this.quantity = data.item.totalQuantity;
    })
  }

  calculateMostRevenue(element: ElementRef) {
    this.salesService.getMostRevenue(element.value).subscribe(data=> {
      this.popularItem = data.item.name || 'No Item';
      this.mostRev = data.item.totalPrice;
    })
  }

  findNumberOfOrders(element: ElementRef) {
    this.salesService.getNumberOfOrders(element.value).subscribe(data => {
      this.orders = data.orders;
    })
  }
}
