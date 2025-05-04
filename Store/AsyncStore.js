class AsyncStore {
  constructor() {
    this.store = {};
  }

  async setItem(key, value) {
    return new Promise((resolve) => {
      this.store[key] = value;
      resolve();
    });
  }

  async getItem(key) {
    return new Promise((resolve) => {
      resolve(this.store[key]);
    });
  }

  async removeItem(key) {
    return new Promise((resolve) => {
      delete this.store[key];
      resolve();
    });
  }
}

export default AsyncStore;
