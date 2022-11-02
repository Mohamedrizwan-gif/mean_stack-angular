import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PostService } from 'src/app/services/post/post.service';
import { Post } from '../post.model';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
    public posts: Post[] = [];
    private postSubscribe!: Subscription;
    
    constructor(private postService: PostService) {}

    ngOnInit(): void {
        this.postSubscribe = this.postService.getPostUpdateListener()
        .subscribe((posts: Post[]) => {
            this.posts = posts;
        });
    }

    ngOnDestroy(): void {
        if(this.postSubscribe) {
            this.postSubscribe.unsubscribe();
        }
    }
}