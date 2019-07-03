'use strict';

const stores = ['negociacoes'];

class ConnectionFactory {

  constructor() {
    throw new Error('Não é possível criar instâncias dessa classe.');
  }

  static getConnection() {
    return new Promise((resolve, reject) => {
      const openRequest = indexedDB.open('jscangaceiro', 2);

      openRequest.onupgradeneeded = e => {
        stores.forEach(store => {
          // lógica que cria as stores
        });
      };

      openRequest.onsuccess = e => {

      };

      openRequest.onerror = e => {

      };
    });
  }

}