import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import PostList from './components/postList';
import SelectedPost from './components/SelectedComponent';

function App() {
  return (
    <div className="App">
      <h2>hi</h2>
      <ButtonComponent/>
      <br/>
      <PostList/>
      <SelectedPost/>
    </div>
  );
}

export default App;
