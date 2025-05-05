class AsyncStore {
  constructor() {
    this.store = {};
  }

  //Traz o valor armazenado para a chave key
  async getItem(key) {
    return new Promise((resolve) => {
      resolve(this.store[key]);
    });
  }
  // Armazena o valor value na chave key
  // Se a chave já existir, o valor é atualizado
  async setItem(key, value) {
    return new Promise((resolve) => {
      this.store[key] = value;
      resolve();
    });
  }
  // Remove o item armazenado na chave key
  async removeItem(key) {
    return new Promise((resolve) => {
      delete this.store[key];
      resolve();
    });
  }
}

export default AsyncStore;
