import React ,{useState} from 'react'
import Usegif from '../hooks/Usegif';
import Spinner from './Spinner';



const Random = () => {
    // const [gif,setgif] = useState('');
    // const API_KEY = 'unK87tAhX2xKFP3FwB24EoMKJCf9CVZd'; 
    // const [loading,setLoading] = useState ('false');
    // async function fetchData(){
    // setLoading(true);
    // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    // const {data} = await axios.get(url);
    // const imagsrc = data.data.images.downsized.url ;
    // setgif(imagsrc);
    // setLoading(false);


    

    // }
    // useEffect (() =>{
    //   fetchData();
    // },[] );

    //Calling hook

    const {gif,loading,fetchData}= Usegif();
    function Clickhandler(){
      fetchData();
           

    }
  return (
    <div className=' w-1/2  flex flex-col  gap-7 items-center bg-red-500  border border-black mt-10 rounded-md'>
        <h1 className='text-3xl underline uppercase text-blue-900 font-bold'>Random Gif</h1>
        {
          loading ? (<Spinner/>): (<img src={gif} width="410" alt=''/>)
        }
        
        <button className=' bg-blue-500 mb-8 w-11/12 rounded-md py-2 text-lg ' onClick={Clickhandler}>Generate!</button>
    </div>
  )
}

export default Random