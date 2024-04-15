import { Injectable } from '@angular/core';
import { GadgetT } from '../../types/types';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class GadgetsService {
  private url = 'https://dummyjson.com/products?limit=50';
  gadgets: GadgetT[] = [];
  search: string = '';
  categories: string[] = [];
  cateogory: string = 'all';
  maxPrice: number = 0;
  priceFilter: number = 0;
  ratingFilter: number = 3;

  constructor() {
    (async () => {
      const res = await axios.get(this.url);
      this.gadgets = res.data.products;
      this.gadgets.forEach((e) => {
        if (!this.categories.includes(e.category)) {
          this.categories.push(e.category);
        }
        if (e.price > this.maxPrice) {
          this.maxPrice = e.price;
        }
      });
      this.priceFilter = (Math.round(this.maxPrice / 100) * 100) / 2;
    })();
  }

  currentGadgets() {
    return this.gadgets
      .filter((e) => e.title.toLowerCase().includes(this.search.toLowerCase()))
      .filter((e) => {
        if (this.cateogory === 'all') {
          return true;
        } else {
          return e.category === this.cateogory;
        }
      })
      .filter((e) => e.price <= this.priceFilter)
      .filter((e) => Math.round(e.rating) >= this.ratingFilter);
  }
}
