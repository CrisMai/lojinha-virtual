import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  showMessage: false,
};

export const showMessage = createAction('SHOW_MESSAGE');
export const hideMessage = createAction('HIDE_MESSAGE');

export default createReducer(INITIAL_STATE, {
  [showMessage.type]: (state) => ({ ...state, showMessage: true}),
  [hideMessage.type]: (state) => ({ ...state, showMessage: false})
})

// Refactoring Código antigo, substituido pela utilização da lib @reduxjs/tookit.
// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case showMessage.type:
//       return { ...state, showMessage: true };
//     case showMessage.type:
//       return { ...state, showMessage: false };
//     default:
//       return state;
//   }
// };

// // Actions Types
// export const Types = {
//   SHOW_MESSAGE: 'SHOW_MESSAGE',
//   HIDE_MESSAGE: 'HIDE_MESSAGE'
// }

// // Actions Creators
// export const Creators = {
//   showMessage: () => ({
//     type: Types.SHOW_MESSAGE
//   }),
//   hideMessage: () => ({
//     type: Types.HIDE_MESSAGE
//   })
// }

