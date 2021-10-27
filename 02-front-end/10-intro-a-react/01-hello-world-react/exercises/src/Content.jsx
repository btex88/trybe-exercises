import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido - SQN'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo - SQN',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei - SQN'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei - SQN'
      },
    ];

    return (
      <>
        {conteudos.map(value => {
          return (
            <ul>
              <li>O conteúdo é: {value.conteudo}</li>
              <li>Status: {value.status}</li>
              <li>Bloco: {value.bloco}</li>
            </ul>
          )
        })}
      </>
    )
  }
}
