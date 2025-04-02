import './App.css';
import reactLogo from './assets/react.svg';
import { BooksPage } from './pages/books'

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
       <BooksPage></BooksPage>
    </>
  )
}

export default App
