import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {

    let changeableUrl = url;
    if(country){
        changeableUrl =`${url}/countries/${country}`;
    }
    try{
const {data : { confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);  //destructuring response
//  const requiredData ={
//     confirmed : data.confirmed, recovered : data.recovered,
//     deaths : data.deaths, lastUpdate : data.lastUpdate  
//     confirmed,  recovered,  deaths, lastUpdate } // below one is cleaner way
return { confirmed, recovered, deaths, lastUpdate};
    }
catch(err){
    console.log(err)
}
}


export const  fetchDailyData = async () =>{
     try{
const {data} = await axios.get(`${url}/daily`)
const modifiedData = data.map((dailyData)=>({
confirmed : dailyData.confirmed.total,
deaths : dailyData.deaths.total,
date : dailyData.reportDate
}));
return modifiedData
     }
     catch(err){}
}

export const  fetchCountries = async () =>{
    try{
        const {data : {countries}} = await axios.get(`${url}/countries`);
        return countries.map( (country) => country.name)
    }
    catch(err){}
}