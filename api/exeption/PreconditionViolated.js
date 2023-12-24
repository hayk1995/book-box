class PreconditionViolated extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 412;
  }
}

module.exports = PreconditionViolated;