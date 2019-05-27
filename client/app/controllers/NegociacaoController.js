class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }

  adiciona(event) {
    event.preventDefault();

    let negociacao = new Negocicao(
      DateConverter.paraData(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor)
    );

    let diaMesAno = DateConverter.paraTexto(negociacao.data);
    console.log(diaMesAno);
  }

}
