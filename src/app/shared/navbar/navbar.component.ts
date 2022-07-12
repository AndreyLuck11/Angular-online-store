import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {CartService} from "../../cart-page/cart.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];
  value1: any;

  constructor(public cart: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Главная',
        icon: 'pi pi-fw pi-home',
        command: (event) => {
          this.router.navigate(['/'])
        }
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
