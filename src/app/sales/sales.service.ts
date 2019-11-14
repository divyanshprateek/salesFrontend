import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SalesService {
  constructor(private http: HttpClient) {}

  getTotalSales() {
    return this.http.get("http://localhost:3000/sales/total-sales");
  }

  getMonthlySales(month: string) {
    return this.http.get(`http://localhost:3000/sales/monthly-sales/${month}`);
  }

  getMostPopular(month: string) {
    return this.http.get(`http://localhost:3000/sales/most-popular/${month}`);
  }

  getMostRevenue(month: string) {
    return this.http.get(`http://localhost:3000/sales/most-revenue/${month}`);
  }

  getMinMaxAverage() {
    return this.http.get(`http://localhost:3000/sales/min-max-average`);
  }

  getNumberOfOrders(month: string) {
    return this.http.get(`http://localhost:3000/sales/number-orders/${month}`);
  }

  getItems() {
    return this.http.get(`http://localhost:3000/sales/get-items`);
  }
}
