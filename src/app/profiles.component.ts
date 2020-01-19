import { Component } from "@angular/core";
import { Profiles } from "./profiles";
import { $ } from 'protractor';

@Component({
    selector: "profiles",
    template: `
        <div>
            <h3>Profiles</h3>
            <div  class="profileListing"  >
                <div [ngClass]="{
                    'selected': isSelected,
                    'disabled': isDisabled
                }" >
                    <div class="d-flex justify-content-between">
                        <label>
                            <like-source [likeCount]="this.profile[0].likeCount" [isLiked]="this.profile[0].isLiked" (click)=likeThis($event) ></like-source>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .selected {
            background: teal;
        }
        .profileListing {
            display: inline-block;
            width: 200px;
            height: 200px;
            border: 3px solid #ccc;
            margin: 20px;
            padding: 10px;
        }
    `]
})


export class ProfilesComponent {
    public profile : any[];
    public isLiked: boolean = false;
    constructor(private profilesData: Profiles){
        this.profile = this.profilesData.getProfiles();
    }

    likeThis(){
        //this.profile.likeCount =+ 1;
        //document.getElementById('id')
        console.log(this.profile[0].likeCount);
        if (this.isLiked == true) {
            this.profile[0].likeCount -= 1; 
            this.profile[0].isLiked = false;
            this.isLiked = false;
        } else {
            this.profile[0].likeCount += 1; 
            this.profile[0].isLiked = true;
            this.isLiked = true;
        }
    }
}