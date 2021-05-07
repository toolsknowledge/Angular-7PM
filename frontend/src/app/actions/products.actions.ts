//actions
//tasks       

import { Action } from "@ngrx/store";
import Product from "../modal/Product";

//enum
export enum ProductsActions{
    ProductsLoading = '[Products] Loading',
    ProductsLoadingSuccess = '[Products] Loading Success',
    ProductsLoadingFail = '[Products] Loading Fail'
};


//totally 3 tasks are ready
//@ProductsLoading   @ProductsLoadingSuccess   @ProductsLoadingFail

export class ProductsLoading implements Action{
    public readonly type = ProductsActions.ProductsLoading;
};


export class ProductsLoadingSuccess implements Action{
    public readonly type = ProductsActions.ProductsLoadingSuccess;
    constructor(public products:Product[]){}
};

export class ProductsLoadingFail implements Action{
    public readonly type = ProductsActions.ProductsLoadingFail;
    constructor(public err:string){}
};

export type ProductsActionTypes = ProductsLoading | ProductsLoadingSuccess |  ProductsLoadingFail;







