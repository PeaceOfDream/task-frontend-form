import './App.css';
import { useEffect } from 'react';
import { MainBreadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import {Form} from './components/Form/Form'
import { useDispatch } from 'react-redux';
import { fetchSchema } from './store/schemaSlice';

function App() {
  const dispatch = useDispatch();
	useEffect(() => {
    dispatch(fetchSchema());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <MainBreadcrumbs />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
