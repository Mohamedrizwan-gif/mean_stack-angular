import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post } from "src/app/components/post/post.model";

@Injectable({providedIn: 'root'})
export class PostService {
    private posts: Post[] = [];
    private postUpdated = new Subject<Post[]>();

    public getPostUpdateListener(): Observable<Post[]>  {
        return this.postUpdated.asObservable();
    }

    public addPost(title: string, content: string): void {
        const post: Post = { title, content };
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
    }
}