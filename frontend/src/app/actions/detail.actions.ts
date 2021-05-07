import { Action } from "@ngrx/store";
import Product from "../modal/Product";

export enum DetailsActions{
    DetailsLoading = '[Details] Loading',
    DetailsLoadingSuccess = '[Details] Loading Success',
    DetailsLoadingFail = '[Details] Loading Fail'
};

export class DetailsLoading implements Action{
    public readonly type = DetailsActions.DetailsLoading;
    constructor(public id:any){}
};

export class DetailsLoadingSuccess implements Action{
    public readonly type = DetailsActions.DetailsLoadingSuccess;
    constructor(public product:Product){}
};

export class DetailsLoadingFail implements Action{
    public readonly type = DetailsActions.DetailsLoadingFail;
    constructor(public err:string){}
};

export type DetailsActionsType = DetailsLoading | DetailsLoadingSuccess | DetailsLoadingFail; 
