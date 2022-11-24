console.log('hello redux');
const redux=require('redux')
const BUY_CAKE='BUY_CAKE';
// Here i am creating store for holding the states value
const createStore=redux.createStore
// creatting action


function buycake(){
    return{
        type:BUY_CAKE,
        info:"Buy first cake "
    }
}

// Here is my store which will contain states of my app
const initialState={
    noOfCakes:10
}
// Now we will crete reducer for perform action and update state according to action.
const reducer=(state=initialState,action)=>{
  switch(action.type){
    case BUY_CAKE:return{
        ...state,
        noOfCakes:state.noOfCakes-1
    }
    default: return state
  }
}
// console.log('stes',state.g);
// Here i am using the cretestore value
const store=createStore(reducer)
console.log('intialvalue',store.getState());

// i will add subscribe method to give permission to change the state value
const unsubscribe1=store.subscribe(()=>console.log("update",store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())

unsubscribe1()
store.dispatch(buycake())