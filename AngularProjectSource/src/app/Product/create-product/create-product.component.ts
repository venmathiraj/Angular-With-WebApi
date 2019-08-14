import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DataServiceService } from '../../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  productData: Product[];
  @Output() setLoadOrShow = new EventEmitter<Boolean>();

  constructor(private product: Product
    , private dataService: DataServiceService
    , private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.productForm = this.fb.group(
      {
        category: new FormControl(''),
        id: new FormControl(''),
        name: new FormControl(''),
        price: new FormControl('')
      });
  }

  onSubmit() {
    // console.warn(this.productForm.value);
    // console.log(this.productForm.valid);
    this.dataService.addProduct(this.productForm.value)
      .subscribe((data) => {
        // console.log(data); 
        this.productData = data;
        this.setLoadOrShow.emit(true);
      });
  }
}
