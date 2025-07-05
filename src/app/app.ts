import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./footer/footer";
import { Main } from "./main/main";
import { Header } from "./header/header";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Main, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'profiles';
}
