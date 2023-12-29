import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-h8k-navbar',
  templateUrl: './h8k-navbar.component.html',
  styleUrls: ['./h8k-navbar.component.css']
})
export class H8kNavbarComponent {
  @Input() header: string | undefined;
}
