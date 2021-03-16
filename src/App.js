import './App.css';
import Tab from './Components/Tab';

function App() {
  //send array to tab component:
  const array = [
    "#1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia labore, voluptates nostrum, numquam, saepe facere repellendus exercitationem tenetur magnam provident placeat! At praesentium magnam saepe laborum corporis, eveniet maxime minus. Libero, quo numquam.",
    "#2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit provident reiciendis delectus maxime laudantium accusamus. Nostrum provident obcaecati nesciunt tempore.",
    "#3 Velit provident reiciendis delectus maxime laudantium accusamus. Nostrum provident obcaecati nesciunt tempore.",
    "#4 NUMBER 4 Velit provident reiciendis delectus maxime laudantium accusamus. Nostrum provident obcaecati nesciunt tempore."
  ]
  return (
    <div className="App">
      <Tab array = {array} />
    </div>
  );
}

export default App;
