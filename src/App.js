import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';
import scifiBooks from './data/scifi.json'


function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <BookList arrayOfBooks={scifiBooks} />
      <MyFooter />
    </div>
  );
}

export default App;
