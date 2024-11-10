import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
// 
export class SharedService{
    public userData= {
        name: "hafiz",
        job: "software developer",
        employee: "Google"
    }
 router = inject(Router)
 getRoute(){
    return this.router.url
    
 }
}