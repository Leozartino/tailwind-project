import { Component } from '@angular/core';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

@Component({
  selector: 'project-sidebar',
  standalone: true,
  imports: [MainNavigationComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {}
