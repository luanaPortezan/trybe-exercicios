import React, { useState } from 'react';
import "./Form.css"

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState();

  return (
    <form className='form'>
      <div className='inputs'>
        <label htmlFor='name' >
          Nome:
          <input
            type="text"          
            value={name}
            onChange={({ target }) => setName(target.value)}
          >
          </input>
        </label>

        <label htmlFor='age'>
          Idade:
          <input
            type="number"
            value={age}
            onChange={({ target }) => setAge(target.value)}
          >
          </input>
        </label>

        <label htmlFor='city'>
          Cidade:
          <input
            type="text"
            value={city}
            onChange={({ target }) => setCity(target.value)}
          >
          </input>
        </label>
      </div>
      <div className='module'>
        <label htmlFor='modulo'>
          Módulo:
          <select
            type="radio"
            name="modulo"
            value={module}
            onChange={({ target }) => setModule(target.value)}
          >
            <option value="Fundamentos">Fundamentos</option>
            <option value="Front-end">Front-end</option>
            <option value="Back-end">Back-end</option>
            <option value="Ciência da Computação">Ciência da Computação</option>
          </select>
        </label>
      </div>
      <button
        className='button'
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          console.log("click!");
      }}
      >
        Enviar
      </button>
    </form>
  );
}

export default Form;
