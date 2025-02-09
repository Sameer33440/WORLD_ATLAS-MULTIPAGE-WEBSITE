import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi";
import { Loader } from "../Component/ui/Loader";
import { CountryCard } from "../Component/layout/CountryCard";
import { SearchFilter } from "../Component/ui/SearchFilter";

export const Country=()=>

    { 
       const[isPending,startTransition] = useTransition() ;
       const[countries, setCountries]=useState([])
       const[search, setSearch]=useState()
       const[filter, setFilter]=useState("all")
        useEffect(()=>
    {
       
        startTransition(async()=>
        {
      const res  =await  getCountryData();
      console.log(res);
      setCountries(res.data);
        })
    },[])
    if(isPending) return <Loader/>
    console.log(search,filter)
    /// main logic to serarh and filter

    const searchCountry=(country)=>
    {
         if(search)
         {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
         }
         return country;
    }
     const filterRegion=(country)=>
     {
        if(filter==="all")return true;
        return country.region.toLowerCase()===filter.toLowerCase();;
     };
  const filterCountries = countries.filter((country)=>
    
        searchCountry(country) && filterRegion(country)
    )
       return<section className="counter-section">
        <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries}/>
        <ul className="grid grid-four-cols">{
             filterCountries.map((curCountry,index)=>
            {
               return <CountryCard country= {curCountry} key={index} />
            })}

        </ul>
       </section>
    }