import { Provider } from 'react-redux';

import store from './store';

import { Cart } from './components/Cart';
import { Catalog } from './components/Catalog';

export function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  )
}