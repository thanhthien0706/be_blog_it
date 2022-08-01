class ReponseObject {
  private status: boolean;
  private message: string;
  private data: object | string;

  constructor(status: boolean, message: string, data: object | string) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

export default ReponseObject;
