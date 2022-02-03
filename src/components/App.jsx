import React, {useState , useEffect} from 'react';
import Tmdb from './Tmdb';
import HomeLists from './HomeLists';
import './styles/App.css';

function App() {

  const [homeLists , setHomeLists] = useState(null)
  
  useEffect(() => {
    const LoadAll = async () => {
      const home_lists_items = await Tmdb.getHomeList();
      setHomeLists(home_lists_items);
    }

    LoadAll()
  }, []);

  return (
    <div className="App">

      <section>
        {homeLists && homeLists.map((item , key) => {
          return(
            <HomeLists key={key} list_name={item.name} info={item.items} />
          );
        })}
      </section>
    </div>
  );
}

export default App;
