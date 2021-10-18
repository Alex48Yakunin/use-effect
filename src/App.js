import {useState} from 'react';
import Details from './components/Details';
import List from './components/List';
import './App.css';

function App() {
  const [detailsOpenId, setDetailsOpenId] = useState(null);
  
  const openDetails = (id) => {
    setDetailsOpenId(id);
  }

  return (
    <div className="App">
      <div className="col-left">
        <List openDetails={openDetails} />
      </div>
      <div className="col-right">
        {detailsOpenId ? <Details id={detailsOpenId} /> : null}
      </div>
    </div>
  );
}

export default App;
