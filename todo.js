function genarateid(arr) {
  if (arr.length === 0) return 1;
  return arr[arr.length - 1].id + 1;
}

class todo {
  constructor(todolist = []) {
    this.todolist = todolist;
  }
  addItem(text) {
    const item = {
      text,
      id: genarateid(this.todolist),
      created: new Date(),
    };
    this.todolist.push(item);
    console.log(this.todolist);
  }
  update(id, text) {
    for (i = 0; i < this.todolist.length; i++) {
      if (this.todolist[i].id === id) {
        this.todolist[i].text = text;
        break;
      }
    }
  }
  done() {
    return this.todolist.shift();
  }
  next() {
    return this.todolist[0];
  }
  list() {
    return this.todolist;
  }
  find(term) {
    const result = [];
    for (i = 0; i < this.todolist.length; i++) {
      const item = this.todolist[i];
      if (item.text.toLowerCase().includes(term.toLowerCase()))
        result.push(item);
    }
    return result;
  }
}
