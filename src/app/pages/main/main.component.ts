import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'project-main',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './main.component.html',
  styles: ``,
})
export class MainComponent {}
