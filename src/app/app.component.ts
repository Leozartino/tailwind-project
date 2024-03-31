import { Component } from '@angular/core';
import { MainComponent } from './pages/main/main.component';

@Component({
  selector: 'project-root',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
