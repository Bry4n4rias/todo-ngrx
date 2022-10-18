import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState, todosStateFeatureKey } from './todos.reducer';

// creamos la caracteristica del todosState
const todosState = createFeatureSelector<TodosState>(todosStateFeatureKey);

// creamos el selector q estraiga la propiedad todos osea el array
export const todos = createSelector(
  /*tenemos 3 argumentos
  1. el selector q se encargara de traer el nombre
  2. el q traera el apeliido
  3. la funcion q calcula el nuevo valor, esta tendra los mismos
  argumentos q la cantidad de selectore creados osea 2  
  Como ya tenemos todo tipado en el todosState queda asi*/
  todosState,
  (todosState) => todosState.todos
);

//   selectorNombre,
//   selectorApellidos,
//   (nombre, apellidos) => `${nombre}  ${apellidos}`;

// creamos le selector para el get
export const hasCompletedTodos = createSelector(todos, (todos) =>
  todos.some((todo) => todo.completed)
);
