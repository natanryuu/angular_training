import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'mod06';
}

