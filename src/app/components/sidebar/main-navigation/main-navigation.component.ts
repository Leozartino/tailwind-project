import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavItemComponent } from './nav-item/nav-item.component';
import NavItem from '../../../shared/nav-item';

@Component({
  selector: 'project-main-navigation',
  standalone: true,
  imports: [RouterLink, CommonModule, NavItemComponent],
  templateUrl: './main-navigation.component.html',
})
export class MainNavigationComponent {
  @Input() public navItems: NavItem[] = [];
}
