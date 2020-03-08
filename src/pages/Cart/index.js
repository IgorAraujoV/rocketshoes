import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';
import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './style';
import { formatPrice } from '../../util/format';

function Cart() {
  const products = useSelector(state =>
    state.cart.map(prod => ({
      ...prod,
      subtotal: formatPrice(prod.price * prod.amount),
    }))
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sum, value) => sum + value.price * value.amount, 0)
    )
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>
                <img src={p.image} alt={p.title} />
              </td>
              <td>
                <strong>{p.title}</strong>
                <span>{p.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(
                        CartActions.updateAmountRequest(p.id, p.amount - 1)
                      )
                    }
                  >
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={p.amount} />
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(
                        CartActions.updateAmountRequest(p.id, p.amount + 1)
                      )
                    }
                  >
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{p.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => dispatch(CartActions.removeFromCart(p.id))}
                >
                  <MdDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">FINALIZAR PEDIDO</button>

        <Total>
          <span>TOTAL:</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
