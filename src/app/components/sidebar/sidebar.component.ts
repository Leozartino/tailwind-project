import { Component } from '@angular/core';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import NavItem from '../../shared/nav-item';

@Component({
  selector: 'project-sidebar',
  standalone: true,
  imports: [MainNavigationComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  public mainNavigationItems: NavItem[] = [
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

  public asideFooterNavItem: NavItem[] = [
    {
      routerPath: 'support',
      navItemTitle: 'Support',
      navItemIcon: 'support',
    },
    {
      routerPath: 'settings',
      navItemTitle: 'Setting',
      navItemIcon: 'settings',
    },
  ];
}
