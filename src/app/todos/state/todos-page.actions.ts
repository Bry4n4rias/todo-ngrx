import { createAction, props } from '@ngrx/store';
import { Todo } from '../model';

// todas estas acciones se exportaran desde el index.ts del state carpeta
// se debe crear una accion en este caso cada q afecte al array todos

export const init = createAction('[Todos page] Init');

export const addTodo = createAction(
  // [Todos page] Add Todo seria lo q se va a mostrar en el devtools
  '[Todos page] Add Todo',
  props<{ todo: Todo }>()
);

export const removeTodo = createAction(
  '[Todos page] Remove Todo',
  props<{ todo: Todo }>()
);

export const markAsCompleted = createAction(
  '[Todos page] Mark as Completed',
  props<{ todo: Todo }>()
);

export const markAsPending = createAction(
  '[Todos page] Mark as Pending',
  props<{ todo: Todo }>()
);

export const clearCompleted = createAction('[Todos page] Clear Completed');
