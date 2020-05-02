class SpotifyError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "SpotifyError";
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default SpotifyError;
