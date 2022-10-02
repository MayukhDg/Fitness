export const  exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '4db3e04167msh8daea1a9ed25076p14f871jsn84f6b43251ff',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async(url, options)=>{
   const response = await fetch(url, options);
   const data = await response.json();
   return data;
}