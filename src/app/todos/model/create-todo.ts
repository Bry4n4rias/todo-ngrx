import { Todo } from './todo.interface';

export function createTodo(description: string): Todo {
  return {
    id: generateId(),
    description,
    completed: false,
  };
}

function generateId(): string {
  return String(Math.round(Date.now() * Math.random() * 9))
    .replace('1', 'e')
    .replace('3', 'a')
    .replace('7', 'c');
}
