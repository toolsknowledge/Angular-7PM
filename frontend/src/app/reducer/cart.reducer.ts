import CartModal from "../modal/cart.modal";
import * as allActions from "../actions/cart.actions";

export default interface CartInterface{
    loading : boolean;
    error : any;
    finalItems:CartModal[]
};



let localstorage_array;
let str = window.localStorage.getItem("cart");
if( str == null ){
    localstorage_array = [];
}else{
    let obj_arr = JSON.parse(str);
    localstorage_array = obj_arr;
}



const initialState:CartInterface = {
    loading:false,
    error:"",
    finalItems:localstorage_array
};

export function cartReducer(state=initialState,action:allActions.CartActionTypes):CartInterface{
    switch(action.type){
        // case allActions.CartActions.CartLoading:
        //     return{
        //         ...state,
        //         finalItems:[],
        //         error:"",
        //         loading:false
        //     }
        //     break;


        case allActions.CartActions.CartRemoveItem:
            const id = action.id;
            console.log( "id",id );
            return{
                ...state,
                finalItems:state.finalItems.filter((element)=> {return element._id != id } )
            }
            break;



        case allActions.CartActions.CartLoadingSuccess:
            const item = action.payload;
           

            let index = state.finalItems.findIndex((element,index)=>{
                return element._id === item._id;
            });
            
            
            if(index!=-1){
                
                return{
                    ...state,
                    finalItems : state.finalItems.map((obj)=>{ return obj._id === item._id ? item : obj}),
                    error:"",
                    loading:true
                }
                
            }else{
               
                return{
                    ...state,
                    finalItems : [...state.finalItems, item ],
                    error:"",
                    loading:true
                }
            }
        // case allActions.CartActions.CartLoadingFail:
        //     return{
        //         ...state,
        //         finalItems:[],
        //         loading:false,
        //         error:""
        //     }
        //     break;
        default:
            return state;
    }
}























// import Cart from "../modal/cart.modal";
// import * as allActions from "../.";

// export interface CartState{
//     loading:boolean;
//     itemsInArray:Cart[];
//     error:any;
// };
// export const initialState:CartState = {
//     loading:false,
//     itemsInArray:[],
//     error:""
// };
// export function cartReducer(state=initialState,action:allActions.CartActionTypes):CartState{
//     switch(action.type){
//         case allActions.CartActions.CartLoading:
//             return{
//                 ...state,
//                 itemsInArray:[],
//                 error:"",
//                 loading:false
//             }
//             break;
//         case allActions.CartActions.CartLoadingSuccess:
//             const item = action.cart;
//             const existedItem = state.itemsInArray.find((obj)=>obj._id === item._id);
//             if(existedItem){
//                 return{
//                     ...state,
//                     itemsInArray:state.itemsInArray.map((obj)=> obj._id === item._id ? item : obj),
//                     error:"",
//                     loading:true
//                 }
//             }else{
//                 return{
//                     ...state,
//                     itemsInArray:[...state.itemsInArray,item],
//                     error:"",
//                     loading:true
//                 }
//             }
//             break;
//         case allActions.CartActions.CartLoadingFail:
//                 return{
//                     ...state,
//                     itemsInArray:[],
//                     error:action.err,
//                     loading:true
//                 }
//                 break;
//         default:
//             return state;
//     }
// };
