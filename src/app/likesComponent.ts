import { Component , Input } from '@angular/core';


@Component({
    selector: "like-source",
    template: `
    <div class="d-flex justify-content-between">
        <div>{{ likeCount }} <i class="fa  fa-1x" [class.fa-star-o]= "isLiked" ></i></div>
        <div></div>
    </div>
    `
})


export class LikesComponent {
@Input() likeCount: Number;
@Input() isLiked: Boolean;
}