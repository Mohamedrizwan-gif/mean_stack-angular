import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
    constructor(public postService: PostService) {}
}