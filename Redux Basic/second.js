const redux = require('redux');
const createStore = redux.createStore



// Action 
const BUY_CAKE = "BUY_CAKE";
const BUY_ICREAME = "BUY_ICREAME"

function buyCake(){
    
    return{
        type:BUY_CAKE,
        info:"First redux action"
    }

}
function buyIceCreame(){
    
    return{
        type:BUY_ICREAME,
        info:"Second redux action"
    }

}


//   (previousState,action)=>newstate

const initialState={
    numberofCakrs:10,
    numberofIceCreams:20
}

const reducer =(state = initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
           ...state,
            numberofCakrs:state.numberofCakrs-1
        }
        case BUY_ICREAME: return{
            ...state,
             numberofIceCreams:state.numberofIceCreams-1
         }
        default: return state;
    }
}





const store = createStore(reducer)

console.log("Initial State",store.getState())
const unsubscribe = store.subscribe(()=>{console.log("Update State",store.getState())})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())


store.dispatch(buyIceCreame())
store.dispatch(buyIceCreame())


unsubscribe