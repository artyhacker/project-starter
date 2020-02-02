import { observable, action, computed } from 'mobx';
import { TodoItem } from './TodoTypes';

class TodoStore {
  @observable list: TodoItem[] = [];

  @observable text: string = '';

  @computed get unFinishedCount() {
    return this.list.filter((l) => !l.done).length;
  }

  @action editText(text: string) {
    this.text = text;
  }

  @action addItem() {
    if (this.text) {
      this.list = [{ text: this.text, id: Math.random(), done: false }, ...this.list];
      this.text = '';
    }
  }

  @action toggleItem(todo: TodoItem) {
    this.list = this.list.map((l) => {
      if (l.id === todo.id) {
        return { ...l, done: !l.done };
      }
      return l;
    });
  }
}

export default new TodoStore();
