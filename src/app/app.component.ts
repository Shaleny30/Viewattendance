import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewattendanceComponent } from './viewattendance/viewattendance.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ViewattendanceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'viewattendance';
}
