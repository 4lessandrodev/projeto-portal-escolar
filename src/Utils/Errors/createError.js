class _Error {
  constructor (msg) {
    this.error = new Error(msg);
  }

  throw () {
    throw new Error(this.error.message);
  }
}

module.exports = _Error;
