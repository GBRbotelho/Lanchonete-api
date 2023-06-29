class Client {
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.document = props.document;
    this.email = props.email;
    this.phone = props.phone;
    this.status = props.status || "active";
  }
}

module.exports = Client;
