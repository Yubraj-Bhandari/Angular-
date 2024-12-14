import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   products = [
    {
      id: 1,
      name: 'Smartphone',
      color: 'Black',
      price: 699.99,
      category: 'Electronics',
      description: 'A high-end smartphone with a 6.5-inch display and 128GB storage.',
      stock: 50
    },
    {
      id: 2,
      name: 'Laptop',
      color: 'Silver',
      price: 1200.00,
      category: 'Computers',
      description: 'A powerful laptop with a 15-inch display and Intel i7 processor.',
      stock: 30
    },
    {
      id: 3,
      name: 'Headphones',
      color: 'Red',
      price: 199.99,
      category: 'Audio',
      description: 'Noise-cancelling over-ear headphones with Bluetooth connectivity.',
      stock: 100
    },
    {
      id: 4,
      name: 'Smartwatch',
      color: 'Blue',
      price: 249.99,
      category: 'Wearables',
      description: 'A fitness tracker smartwatch with heart rate monitor and GPS.',
      stock: 75
    },
    {
      id: 5,
      name: 'Tablet',
      color: 'White',
      price: 399.99,
      category: 'Electronics',
      description: 'A 10-inch tablet with 64GB storage and a high-resolution display.',
      stock: 40
    }
  ];
  
}
