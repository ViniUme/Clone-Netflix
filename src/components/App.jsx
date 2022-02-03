import React, {useState , useEffect} from 'react';
import Tmdb from './Tmdb';
import HomeLists from './HomeLists';
import MainSerie from './MainSerie';
import './styles/App.css'

function App() {

  const [homeLists , setHomeLists] = useState(null);
  const [mainSerie , setMainSerie] = useState(null);
  
  useEffect(() => {
    const LoadAll = async () => {
      const home_lists_items = await Tmdb.getHomeList();
      setHomeLists(home_lists_items);

      let randomNumberSerie = Math.floor(Math.random() * (home_lists_items[0].items.results.length - 1));
      let idMainSerie = home_lists_items[0].items.results[randomNumberSerie].id;
      let randomMainSerie = await Tmdb.getMainSerie(idMainSerie);
      setMainSerie(randomMainSerie);
    }

    LoadAll()
  }, []);

  return (
    <div className="App">

      {mainSerie &&
        <MainSerie info={mainSerie} />
      }

      <section className='App--series-lists'>
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
