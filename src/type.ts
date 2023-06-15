// Example custom exception class
export class NotionClientError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotionClientError';
  }
}
