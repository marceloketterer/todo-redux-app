import { Action, createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, toggleAll, limpiarCompletados } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar escudo del Capitán América'),
];

const reducerTodo = createReducer(estadoInicial,
    on( crear, (state, { texto }) => [...state, new Todo( texto )  ] ),
    on( toggle, (state, { id }) => {
        return state.map( todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            } else {
                return todo;
            }
        });
    }),
    on( editar, (state, { id, texto }) => {
        return state.map( todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto,
                }
            } else {
                return todo;
            }
        });
    }),
    on( borrar, (state, { id }) => {
        return state.filter(todo => todo.id !== id);
    }),
    on( toggleAll, (state, { completado }) => {
        return state.map( todo => {
            return {
                ...todo,
                completado: completado,
            }
        });
    }),
    on(limpiarCompletados, state => {
            return state.filter(todo => !todo.completado);
    
    })
);

export function todoReducer(state: Todo[], action: Action): Array<Todo> {
    return reducerTodo(state, action);
}
