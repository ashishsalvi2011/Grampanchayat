import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./pages/header.component/header.component";
import { Home } from "./pages/home/home";
import { Services } from "./pages/services/services";
import { About } from "./pages/about/about";
import { Members } from "./pages/members/members";
import { Contact } from "./pages/contact/contact";
import { Footer } from "./pages/footer/footer";
import { Award } from "./pages/award/award";
import { Newspaper } from "./pages/newspaper/newspaper";
import { Visitors } from "./pages/visitors/visitors";
import { Programs } from "./pages/programs/programs";
import { Achievements } from "./pages/achievements/achievements";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, Home, Services, About, Members, Contact, Footer, Award, Newspaper, Visitors, Programs, Achievements],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'GRAMPANCHAYAT';
}
