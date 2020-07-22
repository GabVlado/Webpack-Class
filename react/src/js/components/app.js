import React ,{useState} from 'react';
import data from './data.json'
import Loader from './loader';

console.log(data);
const App = () => {

const [loaders,setLoaders] = useState([])
const handleClick = () => {
    setLoaders(data.loaders)
}
    return(
        <div>
            App en React 
            <ul>
                {
                    loaders.map(item=>  <Loader {...item} key={item.id}/>)
                }
            </ul>
            <button onClick={handleClick}>Mostrar lo aprendido </button>
            
        </div>
    )
}
export default App