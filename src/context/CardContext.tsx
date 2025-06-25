'use client';

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  ReactNode,
} from 'react';


/* ——— TYPES ——— */
type CartItem = Product & { qty: number };
type State = { items: CartItem[] };
type Action =
  | { type: 'ADD'; payload: Product }
  | { type: 'REMOVE'; payload: number };

/* ——— REDUCER ——— */
function reducer(state: State, action: Action): State {
  switch (action.type) {
   case 'ADD': {
  const id = +action.payload.id;
  const exists = state.items.some((it) => it.id === id);

  if (exists) {
    
    return {
      items: state.items.map((it) =>
        it.id === id ? { ...it, qty: it.qty + 1 } : it
      ),
    };
  }

  return {
    items: [...state.items, { ...action.payload, id, qty: 1 }],
  };
}
    case 'REMOVE':
      return { items: state.items.filter((it) => it.id !== action.payload) };
    default:
      return state;
  }
}

/* ——— CONTEXT ——— */
const CartContext = createContext<{
  items: CartItem[];
  totalItems: number;
  add: (p: Product) => void;
  remove: (id: number) => void;
}>({ items: [], totalItems: 0, add: () => {}, remove: () => {} });

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(
    reducer,
    { items: [] },
    () =>
      typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem('cart') || '{"items": []}')
        : { items: [] }
  );

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        totalItems: state.items.reduce((n, it) => n + it.qty, 0),
        add: (p) => dispatch({ type: 'ADD', payload: p }),
        remove: (id) => dispatch({ type: 'REMOVE', payload: id }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
