import { Injectable } from '@angular/core';
import { Post } from "src/app/components/post/post.model";

@Injectable({providedIn: 'root'})
export class PostService {
    private posts: Post[] = [];

    public getPosts(): Post[] {
        return [...this.posts];
    }

    public addPost(title: string, content: string): void {
        const post: Post = { title, content };
        this.posts.push(post);
    }
}