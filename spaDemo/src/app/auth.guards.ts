import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

export class authGuards{
    canActivate():boolean{
        return confirm("do you want to enter into page_one ??");
    };

    canDeactivate():boolean{
        return confirm("do you want to leave page_two ??");
    };

    canActivateChild():boolean{
        return confirm("do you want to enter into child_three ??");
    };
};