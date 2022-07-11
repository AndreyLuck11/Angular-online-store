import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import {CartService} from "../../cart-page/cart.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];
  value1: any;

  constructor(public cart: CartService) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Главная',
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'Телефоны',
        icon: 'pi pi-fw pi-mobile',
      },
      {
        label: 'Компьютеры',
        icon: 'pi pi-fw pi-desktop',
      },
      {
        label: 'Бытовая техника',
        icon: 'pi pi-fw pi-building',
      },
      {
        label: 'Офисная переферия',
        icon: 'pi pi-fw pi-print',
      },
      {
        label: 'Аксесуары',
        icon: 'pi pi-fw pi-star',
      }
    ];
  }

}
