import { Component } from '@angular/core';
import { Iprofilestructure } from './Iprofilestructure';

@Component({
    selector: "data-a",
    template: `
        <div>
            <h4>A component</h4>
            <div>
                <data-b [profileData]=profilesq (Event)="pushToProfiles($event)"></data-b>
            </div>
        </div>
    `,
})

export class DataPassingA {

    public profilesq: Iprofilestructure  = [
        {
            name: "aaa",
            age: 23,
            email: "sa@gmail.com"
        },
        {
            name: "bbb",
            age: 25,
            email: "sp@gmail.com"
        },
        {
            name: "ccc",
            age: 29,
            email: "sw@gmail.com"
        }
    ]

    constructor(){}

    pushToProfiles(data){
        //this.profilesq.push(data);
        //this.profilesq.push({ name:"df", age: 34, email: "swe@gmail.com"});
        this.profilesq.push({ name:data.name, age:data.age, email:data.email, kmd:"rrtrt"});
        console.log(this.profilesq);
    }
}