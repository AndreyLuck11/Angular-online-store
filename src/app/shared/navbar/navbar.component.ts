import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];
  value1: any;

  constructor( private router: Router) { }

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
        command: (event) => {
          this.router.navigate(['/category', '1'])
        }
      },
      {
        label: 'Компьютеры',
        icon: 'pi pi-fw pi-desktop',
        command: (event) => {
          this.router.navigate(['/category', '2'])
        }
      },
      {
        label: 'Бытовая техника',
        icon: 'pi pi-fw pi-building',
        command: (event) => {
          this.router.navigate(['/category', '3'])
        }
      },
      {
        label: 'Офисная переферия',
        icon: 'pi pi-fw pi-print',
        command: (event) => {
          this.router.navigate(['/category', '4'])
        }
      },
      {
        label: 'Аксесуары',
        icon: 'pi pi-fw pi-star',
        command: (event) => {
          this.router.navigate(['/category', '5'])
        }
      }
    ];
  }

}
