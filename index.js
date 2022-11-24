const redux=require('redux')
const BUY_CAKE='BUY_CAKE';
// Here i am creating store for holding the states value
const createStore=redux.createStore
// creating ACTION
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
// Now we will create reducer for perform action and update state according to action.
const reducer=(state=initialState,action)=>{
  switch(action.type){
    case BUY_CAKE:return{
        ...state,
        noOfCakes:state.noOfCakes-1
    }
    default: return state
  }
}
// Here i am using cretestore 
const store=createStore(reducer)
console.log('intialvalue',store.getState());

// i am adding subscribe method to give permission to change the state value
const unsubscribe1=store.subscribe(()=>console.log("update",store.getState()))
for (let i = 0; i < 10; i++) {
  var ot1= store.dispatch(buycake())
  if(store.getState().noOfCakes===0){
    console.log('Out Of Stock');
    break;
  }
}
unsubscribe1()
store.dispatch(buycake())