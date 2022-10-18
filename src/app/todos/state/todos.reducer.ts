import { createReducer, on } from '@ngrx/store';
import { TodosPageActions } from '.';
import { initialTodos, Todo } from '../model';

export const todosStateFeatureKey = 'todosState';
export interface TodosState {
  todos: Todo[];
  // other: boolean;
}

// declaramos como se va iniciar el state, en este caso el array de todos
const initialState: TodosState = {
  todos: [],
  // other: true
};

// creamos los reducers
export const todosReducer = createReducer(
  // el initial state en un array vacio
  initialState,
  /*on recibe 2 argumentos, primero al accion a procesar y segundo la funcion reductora
   on tambien puede recivir mas acciones en casos donde la accion haga la mismo pero desde diferentes partes
   ej agregar al carrito desde una pagina y desde otra se pondrian primero las actions y desps la funcion reducer
   en este caso e igual a la funcion en el ngoninit la action va inicializar la variable todos con lo q venga en el initial state
   osea 3 tareas predefinidas */
  on(TodosPageActions.init, (currentState) => ({
    // currentState es lo mismo q el initialState
    ...currentState,
    todos: initialTodos,
  })),
  on(TodosPageActions.addTodo, (currentState, action) => ({
    /*/ los 2 parametros son alias pero en si son una copia del estado actual de los todos y le añadimos el
    nuevo todo q viene de la action ...currentState,
    estos current state q estan por fuera se hacen por si se llega a tener el initialState con otra propiedad a parte del todos
    o si se llega a modificar en el futuro para no estarvolviendola a igualar manualmente*/

    todos: [...currentState.todos, action.todo],
  })),
  on(TodosPageActions.removeTodo, (currentState, action) => ({
    // action es la funcion q alamcena el todo q vino por parametro desde el html, paso por el dyspatch y luego llega aca por los actions
    ...currentState,
    // como no vamos a agregar otra tarea no hay necesidad de poner las ...
    // solo vamos a coger los todo actuales y filtrarlos
    todos: currentState.todos.filter((todo) => todo.id !== action.todo.id),
  })),
  on(TodosPageActions.markAsCompleted, (currentState, action) => ({
    ...currentState,
    // como no vamos a agregar otra tarea no hay necesidad de poner las ...
    // solo vamos a coger los todo actuales y filtrarlos
    todos: currentState.todos.map((todo) =>
      todo.id === action.todo.id ? { ...todo, completed: true } : todo
    ),
  })),
  on(TodosPageActions.markAsPending, (currentState, action) => ({
    ...currentState,
    // como no vamos a agregar otra tarea no hay necesidad de poner las ...
    // solo vamos a coger los todo actuales y filtrarlos
    todos: currentState.todos.map((todo) =>
      todo.id === action.todo.id ? { ...todo, completed: false } : todo
    ),
  })),
  on(TodosPageActions.clearCompleted, (currentState, action) => ({
    ...currentState,
    // como no vamos a agregar otra tarea no hay necesidad de poner las ...
    // solo vamos a coger los todo actuales y filtrarlos
    todos: currentState.todos.filter((todo) => todo.completed === false),
  }))
);
