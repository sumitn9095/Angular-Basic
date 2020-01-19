import { Component } from '@angular/core';
import { getMaxListeners } from 'cluster';

@Component({
    selector: "data-a",
    template: `
        <div>
            <h4>A component</h4>
            <div>
                <data-b [profileData]=profiles (Event)="pushToProfiles($event)"></data-b>
            </div>
        </div>
    `,
})


interface ProfilesStructure {
    [index: number]:  { name: string; age: number; email: string }
}


export class DataPassingA {

    public profiles : ProfilesStructure  = [
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
        //this.profiles.push(data);
        //console.log(data);
    }
}