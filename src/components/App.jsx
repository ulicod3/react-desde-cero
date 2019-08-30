import React from 'react';
import AppRoutes from './AppRoutes';
import { Provider } from "mobx-react"
import '../styles/styles.scss'
import CartStore from '../stores/CartStore';



const App = () => (
    
   <Provider CartStore={CartStore}>
    <AppRoutes />
    </Provider>
)

export default App;
