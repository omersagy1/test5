class DisplayMessage {

  constructor(text) {
    this.text = text;
  }

}


class MessageHistory {

  constructor() {
    this.messages = [];
  }

  addMessage(message) {
    this.messages.push(message);
  }

}

export {DisplayMessage, MessageHistory};