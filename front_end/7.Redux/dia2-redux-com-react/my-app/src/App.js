import { connect } from "react-redux"; // obs:  Quando temos um componente conectado, podemos acessar uma prop chamada dispatch
import { actionCreator } from "./redux/actions";

function App(props) {
  const { countState, dispatch } = props; // A prop Dispatch é uma função que vem da Store e é ela que dispara uma ação
  return (
    <div className = "App">
      <h1>Contador React-Redux</h1>
       <h2>{countState}</h2>  {/*5. conecta a props countState com nosso html */} 
      <button onClick={() => dispatch(actionCreator(1))}>Incrementar 1</button> {/* Configura o evento de Clique e toda vez que clicar vai chamar o dispatch - dispara a ação que criamos no actionCreator, lembrando que a actionCreator é uma função, então precisa chamar com o par de parênteses */}
      <button onClick={() => dispatch(actionCreator(5))}>Incrementar 5</button> {/*O actionCreator com valor 5 ele incrementa de 5 em 5 por conta da função action do payload*/}
    </div>
  )
}

// const funcaoRetornada = connect();
// export default funcaoRetornada()(App);

const mapStateToProps = (state) => ({ //função que recebe como parâmetro o state e vai retornar um objeto
//a chave (key) desse objeto é o nome da prop
//o valor (value) é o valor que a gente quer que essa prop tenha
  countState: state.count,
});

export default connect(mapStateToProps)(App); // 4. Fizemos o connect para pegar a prop do  objeto countState direto do State