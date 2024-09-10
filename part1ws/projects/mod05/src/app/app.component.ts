import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, NgbPaginationModule, NgbAlertModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'mod05';
}
