import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Product {
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;

  constructor(private afs: AngularFirestore) {
    this.productsCollection = this.afs.collection<Product>('products');
    this.products = this.productsCollection.valueChanges();
  }

  getProducts(): Observable<Product[]> {
    return this.products;
  }
}
