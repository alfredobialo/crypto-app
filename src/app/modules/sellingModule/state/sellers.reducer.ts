import {createReducer, on} from '@ngrx/store';
import {incrementCounter, initValue, decrementCounter, resetCounter} from  "./sellers.action";

export const counterReducer  = createReducer(initValue,
    on(incrementCounter, (currentState) => currentState + 1 ),
    on(decrementCounter, (currentState) => currentState - 1 ),
    on(resetCounter, (currentState) => 0 ),
  );
