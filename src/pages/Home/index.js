import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MdAddShoppingCart } from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';
import { ProductList } from './style';
import { formatPrice } from '../../util/format';

function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((total, value) => {
      total[value.id] = value.amount;
      return total;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const prods = await api.get('products');

      const data = prods.data.map(p => ({
        ...p,
        priceFormatted: formatPrice(p.price),
      }));
      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }
  return (
    <ProductList>
      {products.map(p => (
        <li key={p.id}>
          <img src={p.image} alt="product" />

          <strong>{p.title}</strong>
          <span>{p.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(p.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
              <span>{amount[p.id] || 0}</span>
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

export default Home;
