import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: "data-b",
    template: `
        <div>
            <h4>B component</h4>
            <div *ngFor="let profile of profileData">
                <label> {{profile.name}} </label>
                <label> {{profile.age}} </label>
                <label> {{profile.email}} </label>
            </div>
            <div>
                <label><input type="text" name="" id="name" #name ></label>
                <label><input type="text" age="" id="age" #age ></label>
                <label><input type="text" email="" id="email" #email ></label>
                <button class="btn btn-primary" (click)="passData(name,age,email)" >Submit</button>
            </div>
        </div>
    `
})

export class DataPassingB {
    @Input() public profileData: any[];
    @Output() Event = new EventEmitter;

    constructor(){}

    passData(name,age,email){
        //console.log(name.value);

        var formData = {
            name: name.value,
            age: age.value,
            email: email.value,
        }

        this.Event.emit(formData);
    }

}
