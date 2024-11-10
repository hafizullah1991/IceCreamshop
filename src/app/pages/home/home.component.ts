import { Component, signal , inject} from '@angular/core';
import { SharedService } from '../../services/shared.services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public iceCreamFlavors = signal<string[]>([
    'Vanilla',
    'Chocolate',
    'Cookies & Cream',
    'Mint',
    'Strawberry',
    'Cherry',
    'Rocky Road'
  ])
}

