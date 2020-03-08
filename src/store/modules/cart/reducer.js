import { produce } from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART_SUCCESS':
      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      });
    case 'REMOVE_FROM_CART':
      return produce(state, draft => {
        const index = draft.findIndex(x => x.id === action.id);

        if (index >= 0) draft.splice(index, 1);
      });
    case 'UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const product = draft.find(x => x.id === action.id);
        product.amount = Number(action.amount);
      });
    }
    default:
      return state;
  }
}
