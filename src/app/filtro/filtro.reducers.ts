import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const estadoInicial: filtrosValidos = 'todos';

const reducerFiltro = createReducer(estadoInicial,
    on( setFiltro, (state, { filtro }) => filtro),
);

export function filtroReducer(state: filtrosValidos, action: Action): filtrosValidos {
    return reducerFiltro(state, action);
}
