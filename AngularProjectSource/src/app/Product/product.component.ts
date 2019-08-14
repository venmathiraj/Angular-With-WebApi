import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  loadCreateProductComponent: boolean = false;
  error: any;
  productData: any;

  constructor(private product: Product, private dataService: DataServiceService) { }

  ngOnInit() {
    this.LoadProducts();
  }

  LoadProducts() {
    this.dataService.getProducts().subscribe((data) => {
      this.productData = data.valueOf();
      // console.log(JSON.stringify(data));
    },
      (error) => { this.error = error; console.log(JSON.stringify(error)) });
  }
  createProduct() {
    this.loadCreateProductComponent = true;
  }

  editProduct(key: number) {
    // this.dataService.editProduct();
    // this.data.filter(row => row.isEditable).map(r => { r.isEditable = false; return r })
    this.productData[key].isEditable = true;
  }
  updateProduct(key: string) {
    // this.dataService.editProduct();
    // this.data.filter(row => row.isEditable).map(r => { r.isEditable = false; return r })
    let editedProduct: Product = this.productData[key];
    this.productData[key].isEditable = false;
    // console.log(this.productData);
    this.dataService.updateProduct(editedProduct).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  setLoadOrShow() {
    this.loadCreateProductComponent = false;
    this.LoadProducts();
  }



}
