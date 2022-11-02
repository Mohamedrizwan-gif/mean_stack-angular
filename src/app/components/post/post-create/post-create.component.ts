import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Post } from "../post.model";
import { PostService } from "src/app/services/post/post.service";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css'] 
})
export class PostCreateComponent {
    public enteredValue = '';

    constructor(private postService: PostService) {}
    
    public onAddPost(form: NgForm): void {
        if(form.invalid) {
            return;
        }
        const post: Post = {
            title: form.value.title,
            content: form.value.content
        }
        this.postService.addPost(post.title, post.content);
        form.resetForm();
    }
}