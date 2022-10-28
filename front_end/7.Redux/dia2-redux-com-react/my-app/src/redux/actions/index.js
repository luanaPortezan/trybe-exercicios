// O que é uma action? a Action tem é um objeto que tem um identificador, identifica qual ação que será chamada e a partir desse identificador o Reducer saberá o que tem que fazer e o que terá que alterar no estado
// Apesar da action ser um objeto, no redux não exportamos direto na nossa aplicação, o padrão é encapsular em uma função.
// NÃO FAZER:
// const action = {
//   type: "INCREMENT_COUNTER",
// };

export const actionCreator = (increment = 1) => ({ // Quando precisar disparar a ação já não chama a action, mas as actionsCreator, porque assim conseguimos chamar um parâmetro e poder passar um valor para a action e usar no Reducer
// actionCreator recebe um nome que faz sentido "xablau"
// o parâmetro increment significa o número que eu quero incrementar, então quando eu quiser incrementar 1 será 1 e quando eu quiser 5 será 5 - valor default será 1 pois assim ele irá pelo menos incrementar 1
  type: "INCREMENT_COUNTER", // obrigatório essa chave type
  payload: increment, // payload é uma convenção
});