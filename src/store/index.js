import { createStore, persist } from 'easy-peasy';
import GlobalModel from './model/globalModel';
import AuthModel from './model/authModel';


const store = createStore({
    global: GlobalModel,
    auth: persist(AuthModel),
});
export default store;
