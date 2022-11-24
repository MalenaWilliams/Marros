import './App.css';
import Navbar from "./navbar/navbar";
import ItemListContainer from './itemListContainer/itemListContainer';

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Aqui se visualizaran los productos posteriormente"}/>
    </>
  );
};

export default App;


