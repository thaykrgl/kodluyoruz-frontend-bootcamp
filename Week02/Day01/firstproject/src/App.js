import './App.css';
import Paragraph from './Paragraph';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <Title text="Yeni Başlık" bg="red" color="#fff" />
      <Paragraph p="Yeni Paragraf" />
    </div>
  );
}

export default App;
