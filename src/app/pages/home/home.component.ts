import { Component } from '@angular/core';
import { PostComponent } from '../../components/post/post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ PostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
