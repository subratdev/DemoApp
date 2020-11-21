import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private productservice: ProductService) { }
productlist: Product;
  ngOnInit(): void {
this.productservice.getproduct().subscribe(data => {
  this.productlist = data;
});
  }

}
