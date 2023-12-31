import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { favoritesReducer } from './favorites/favoritesSlise';
import { carsReducer } from './carsSlise';

const favoritePersistConfig = {
  key: 'favorites',
  storage,
};

export const reducer = {
  cars: carsReducer,
  favorites: persistReducer(favoritePersistConfig, favoritesReducer),
};
