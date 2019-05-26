class Negocicao {

    constructor(_data, _quantidade, _valor) {
        Object.assign(this, {_quantidade, _valor});
        this._data = new Date(_data.getTime());
        Object.freeze(this);
    }

    getVolume() {
        return this._quantidade * this._valor;
    }

    // métodos acessores
    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}