import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from 'redux-thunk';
import { drawerReducer } from "./reducers/drawer";




// Başlangıç durumu (initial state)
const initialState = {
  // Projenize uygun başlangıç durumu değerlerini burada tanımlayabilirsiniz
};

// Reducer'ları birleştirme
const rootReducer = combineReducers({
  // Tanımladığınız reducer'ları burada ekleyin
  drawer:  drawerReducer
});

// Store oluşturma
const store = createStore(
  rootReducer, // Kullanılacak reducer
  initialState, // Başlangıç durumu
  composeWithDevTools(applyMiddleware(thunk)) // Redux Geliştirici Araçları ve middleware'ler
);

export default store;






