import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'project-nav-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-item.component.html',
  styles: ``,
})
export class NavItemComponent {
  @Input() routerPath: string = '';
  @Input() navItemTitle: string = '';
  @Input() navItemIcon: string = '';
}
