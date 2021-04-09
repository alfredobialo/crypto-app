import { createAction} from '@ngrx/store';
// sample increment counter demo with ngRx Store

export const initValue  = 0;
export const incrementCounter  = createAction("[Counter Module] IncrementCounter");
export const decrementCounter  = createAction("[Counter Module] DecrementCounter");
export const resetCounter  = createAction("[Counter Module] ResetCounter");
