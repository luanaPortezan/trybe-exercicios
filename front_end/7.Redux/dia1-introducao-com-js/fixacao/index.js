import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

// 1. Criando o reducer com o estado inicial
const INITIAL_STATE = { 
  count: 0,
};
// console.log(INITIAL_STATE)

// 5. depois de dispara a action chama o reducer que vai alterar o  nosso State
const reducer = (state = INITIAL_STATE, action) => {
  // if (action.type === "INCREMENT_COUNTER") {
  //   return { count: state.count + 1 }
  // }
  // return state;
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { 
        ...state,
        count: state.count + 1 
      }
    default:
      return state;
  }
};

// 2. Criando a store já com o redux dev/tools
const store = createStore(reducer, composeWithDevTools());

// 3. Criando a action
const action = { type: "INCREMENT_COUNTER" };

// 4. Disparando a nossa action
const incrementButton = document.querySelector("button");
incrementButton.addEventListener("click", () => {
// console.log("click");
  store.dispatch(action);
});

// 6. lendo as alterações do State
store.subscribe(() => {
  // console.log("os estado foi alterado");
  const globalState = store.getState();
  // console.log(globalState);
  const counterElement = document.querySelector("h2");
  counterElement.innerHTML = globalState.count;
});
