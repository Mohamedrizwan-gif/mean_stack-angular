import { Component } from '@angular/core';
import { Post } from './components/post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public storedPost: Post[] =  [];
}
