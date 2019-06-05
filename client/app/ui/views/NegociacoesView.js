'use strict';

class NegociacoesView {

  constructor(seletor) {
    this._elemento = document.querySelector(seletor);
  }

  template(model) {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>

        <tbody>
          ${model.paraArray().map(negociacao => {
            return negociacao;
          })}
        </tbody>

        <tfoot>
        </tfoot>
      </table>
    `
  }

  update(model) {
    this._elemento.innerHTML = this.template(model);
  }
}
