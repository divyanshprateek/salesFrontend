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
  name: string;
  nameOfPopular: string;
  constructor(private salesService: SalesService) {}

  ngOnInit() {
    this.salesService.getTotalSales().subscribe((data: any) => {
      this.totalSales = data.totalSales;
    });

    this.salesService.getMinMaxAverage().subscribe((data: any) => {
      this.name = data.name;
      this.min = data.min;
      this.max = data.max;
      this.average = data.average;
    });

    this.salesService.getItems().subscribe((data: any) => {
      this.items = [...data];
    });
  }

  calculateMonthySales(element: HTMLInputElement) {
    this.salesService.getMonthlySales(element.value).subscribe((data: any) => {
      this.monthlySales = data.monthlySales;
    });
  }

  findMostPopular(element: HTMLInputElement) {
    this.salesService.getMostPopular(element.value).subscribe((data: any) => {
      this.mostPopularItem = data.item.name || "No Item";
      this.quantity = data.item.totalQuantity;
    });
  }

  calculateMostRevenue(element: HTMLInputElement) {
    this.salesService.getMostRevenue(element.value).subscribe((data: any) => {
      this.popularItem = data.item.name || "No Item";
      this.mostRev = data.item.totalPrice;
    });
  }

  findNumberOfOrders(element: HTMLInputElement) {
    this.salesService
      .getNumberOfOrders(element.value)
      .subscribe((data: any) => {
        this.orders = data.orders.number;
        this.nameOfPopular = data.orders.name || "Not Found";
      });
  }
}
