import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavItemComponent } from './nav-item/nav-item.component';

interface NavItem {
  routerPath: string;
  navItemTitle: string;
  navItemIcon: string;
}

@Component({
  selector: 'project-main-navigation',
  standalone: true,
  imports: [RouterLink, CommonModule, NavItemComponent],
  templateUrl: './main-navigation.component.html',
})
export class MainNavigationComponent {
  public navItems: NavItem[] = [
    {
      routerPath: 'home',
      navItemTitle: 'Home',
      navItemIcon: 'home',
    },
    {
      routerPath: 'dashboard',
      navItemTitle: 'Dashboard',
      navItemIcon: 'bar_chart',
    },
    {
      routerPath: 'projects',
      navItemTitle: 'Projects',
      navItemIcon: 'stacks',
    },
    {
      routerPath: 'reporting',
      navItemTitle: 'Reporting',
      navItemIcon: 'flag',
    },
    {
      routerPath: 'users',
      navItemTitle: 'Users',
      navItemIcon: 'group',
    },
  ];
}
