import { Component, inject, OnInit, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu.interfaces';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  // public menuItems = signal<MenuItem[]>([
  //   {
  //     id: 1,
  //     name: 'Sunday Funday',
  //     price: '$9.99',
  //     calories: '440',
  //     flavor: 'Chocolate',
  //     quantity: 5
  //   },
  //   {
  //     id: 2,
  //     name: 'Minty Dream',
  //     price: '$4.99',
  //     calories: '1000',
  //     flavor: 'Mint/Chocolate'
  //   },
  //   {
  //     id: 3,
  //     name: 'Nasty Cream',
  //     price: '$2.99',
  //     calories: '120',
  //     flavor: 'Strawberry'
  //   },
  //   {
  //     id: 4,
  //     name: 'Hafiz Favorite',
  //     price: '$1.00',
  //     calories: '510',
  //     flavor: 'Texas Campfire'
  //   }
  // ])
private http = inject(HttpClient)
private api = " https://672ec227229a881691f0d9bf.mockapi.io/scoop/iceCreams "
public icecreams = signal<MenuItem[]>({
  id:0,
  name: '',
  price:0,
  calories:0,
  category: '',
  description:''
})
}
oninni
