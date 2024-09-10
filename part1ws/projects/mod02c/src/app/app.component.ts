import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HomeComponent, FooterComponent],
  template: `
  <div class="container">
    <section class="header">Header
      <h1>Welcome to {{title}}!</h1>
      <uuu-nav>
      </uuu-nav>
    </section>
    <section class="content">

     <router-outlet></router-outlet>

    </section>
    <section class="footer">
      <footer></footer>
    </section>
</div>
    `,
  styles: `   
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .header, .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightgray;
  }

  // .header {
  //   flex: 1;
  // }

  .content {
    flex: 8.5;
  }

  .footer {
    flex: 0.5;
  }
  `,
})
export class AppComponent {
  title = 'mod02c';
}
