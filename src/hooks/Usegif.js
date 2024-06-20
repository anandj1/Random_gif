import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const Usegif = (tag) => {
const [gif,setgif] = useState('');
const API_KEY = 'VJoNB2NYjzpkdTVSN97f399uquTDBkaq'; 


const [loading,setLoading] = useState ('false');

async function fetchData(tag){
setLoading(true);
const meme_url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const random_ur = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const {data} = await axios.get(tag?(meme_url):(random_ur));
const imagsrc = data.data.images.downsized.url ;
setgif(imagsrc);
setLoading(false);




}
useEffect (() =>{
  fetchData();
},[] );
  return {gif,loading,fetchData};
   
  
}

export default Usegif

