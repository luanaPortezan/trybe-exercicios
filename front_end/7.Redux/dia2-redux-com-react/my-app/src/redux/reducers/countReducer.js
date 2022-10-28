// Esse é o reducer
const INITIAL_STATE = {
  click: 0,
  count: 0,
};

function counterReducer(state = INITIAL_STATE, action) { // a função do reducer recebe como parâmetros um estado (state) e um ação (action)
  switch (action.type) { // por padrão a action sempre retorna um objeto com a chave (key) do tipo type
    case 'INCREMENT_COUNTER': // verifica se a action que criei
    return { // [ANTES] return { count: state.count + 1 };
      ...state,
      count: state.count + action.payload // se caso positivo ele retorna a incrementação - é um objeto! - onde o value do objeto é o estado atual do objeto incrementado 
    }; 
    default:
      return state; // caso negativo ele mantém o estado anterior
  }
}

export default counterReducer; // para conseguir usar o reducer precisa exportar para a Store

// outras observações:
// A action é um objeto que envia uma ação ao reducer, o qual realizará uma alteração no estado global. 
// Além da chave type, que é obrigatória, podemos enviar outros valores ao reducer.
