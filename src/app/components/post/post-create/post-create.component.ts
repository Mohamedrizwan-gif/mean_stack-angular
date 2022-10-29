import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Post } from "../post.model";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css'] 
})
export class PostCreateComponent {
    public enteredValue = '';
    
    public onAddPost(form: NgForm): void {
        if(form.invalid) {
            return;
        }
        const post: Post = {
            title: form.value.title,
            content: form.value.content
        }
    }
}