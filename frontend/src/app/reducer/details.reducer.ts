import Product from "../modal/Product";
import * as allActions from "../.";

export interface detailsState{
    loading:boolean;
    my_product:Product;
    error:string;
};

export const initialState:detailsState = {
    loading:false,
    my_product:{_id:"",
             name:"",
             brand:"",
             category:"",
             countInStock:0,
             description:"",
             image:"",
             price:0,
             numReviews:0,
             rating:0},
    error:""
};

export function detailsReducer(state=initialState,action:allActions.DetailsActionsType):detailsState{
    switch(action.type){
        case allActions.DetailsActions.DetailsLoading:
            return{
                ...state,
                my_product:{_id:"",
                name:"",
                brand:"",
                category:"",
                countInStock:0,
                description:"",
                image:"",
                price:0,
                numReviews:0,
                rating:0},
                error:"",
                loading:false
            }
        break;

        case allActions.DetailsActions.DetailsLoadingSuccess:
            return{
                ...state,
                my_product:action.product,
                error:"",
                loading:true
            }
        break;

        case allActions.DetailsActions.DetailsLoadingFail:
                return{
                    ...state,
                    loading:true,
                    error:action.err,
                    my_product:{_id:"",
                            name:"",
                            brand:"",
                            category:"",
                            countInStock:0,
                            description:"",
                            image:"",
                            price:0,
                            numReviews:0,
                            rating:0},
                }
                break;
        default:
            return state;
    }
};




