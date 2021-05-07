import { ProductsActionTypes,ProductsActions } from "../actions/products.actions";
import Product from "../modal/Product";

export interface IState{
    loading:boolean;
    products:Product[];
    error:any;
};

const initialState:IState={
    loading:false,
    products:[],
    error:""
};

export function productsReducer(state=initialState,action:ProductsActionTypes):IState{
    switch(action.type){
        case ProductsActions.ProductsLoading:
            return{
                ...state,
                loading:false,
                products:[],
                error:""
            }
        break;
        case ProductsActions.ProductsLoadingSuccess:
            return{
                ...state,
                loading:true,
                products:action.products,
                error:""
            }
        break;
        case ProductsActions.ProductsLoadingFail:
            return{
                ...state,
                loading:true,
                products:[],
                error:action.err
            }
        break;
        default:
            return state;
    }
};



