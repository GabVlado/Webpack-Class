import React ,{useState} from 'react';
import data from './data.json'
import Loader from './loader';
import logo from '../../images/platzi.png'
import video from  '../../video/que-es-core.mp4'

console.log(data);
const App = () => {

const [loaders,setLoaders] = useState([])
const handleClick = () => {
    setLoaders(data.loaders)
}
    return(
        <div>
            <h1>App en React</h1> 
            <video src={video} width={360} controls poster={logo}></video>
            <figure>
                <img src={logo} alt="" width={40}/>
            </figure>
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