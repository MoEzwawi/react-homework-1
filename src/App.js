import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Welcome from './components/Welcome';
// import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';



function App() {
  return (
    <div className='bg-brownish'>
      <MyNav />
      <Welcome />
      <BookList />
      <MyFooter />
    </div>
  );
}

export default App;
