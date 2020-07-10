import React , { useEffect, useState } from "react";
import axsios from 'axios';
import { Link } from "react-router-dom";

const Cities = () => {
    const [ cityes , setCity] = useState([])
    const [ cityesTomb , setCityTomb] = useState(null)

    useEffect(()=>{
        addCities()
    })

    const addCities = () =>{
        axsios.get('http://worldtimeapi.org/api/timezone')
            .then(resonse => {
               setCity(resonse.data)
            })
    }

    const filterCities = (e) =>{
        var  input =  e.target.value;

        setCityTomb( (prevcity) => {
            return cityes.filter(s=>{
                return s.toLowerCase().includes(input.toLowerCase())
            } )
        } )

    }


    return(
        <div>
            <div className="row container">
                <form className="col s12 l12 m12 mt-2">
                    <div className="input-field col s12">
                        <input type="text" onChange={filterCities} id="city" className="inputfield"/>
                        <label htmlFor="city" className="deep-orange-text">
                            Search for city
                        </label>
                    </div>
                </form>
            </div>

            <div className="row">
                {cityesTomb != null ? (cityesTomb.map(city => (
                    <Link  key={city} to={`/${city}`} >
                        <div className="col l3 m4 s6 " key={city}>
                            <div className="card blue-grey darken-1 ">
                                <div className="card-content white-text">
                                    <p>{city}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))) : (cityes.map(city => (
                        <Link  key={city} to={`/${city}`} >
                            <div className="col l3 m4 s6 ">
                                <div className="card blue-grey darken-1 ">
                                    <div className="card-content white-text">
                                        <p>{city}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )))
                }
            </div>

        </div>
    )
}

export default Cities