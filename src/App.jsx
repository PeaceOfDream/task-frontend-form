import './App.css';
import { MainBreadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

import { Provider } from 'react-redux';
import store from './store';
import { FormLayout } from './components/Form/FormLayout/FormLayout';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <MainBreadcrumbs />
        <FormLayout />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
