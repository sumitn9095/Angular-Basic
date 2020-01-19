import { Component } from '@angular/core';

@Component({
    selector: "gender-change",
    template: `
        <div class="row">
            <div class="col-md-4">
                <button class="btn btn-primary" (click)="gender = male;"  [disabled]= "gender == male">Male</button>
                <button class="btn btn-primary" (click)="gender = female;" [disabled]= "gender == female" >Female</button>
            </div>
            <div class="col-md-8" *ngIf="gender" >
                <div> Name: {{ gender.name }}</div>
                <div> Age: {{ gender.age }}</div>
                <div> Photo: <img [src]="gender.photo" /> </div>
            </div>
        </div>
    `
})

export class GenderChange {
    public gender: any[];
    public male = {
        name: "John",
        age: 34,
        photo: "../assets/img/img1.jpg"
    }
    public female = {
        name : "Emma",
        age : 23, 
        photo: "../assets/img/img2.jpg"
    }
    constructor(){}
}