import React , {useEffect, useState} from 'react';
import axios from  'axios'
import {Link} from "react-router-dom";
import moment from "moment";

const Clock = ({match}) =>{
    const [time , setTime]= useState('')
    const [week , setWeek]= useState('')
    const [day , setDay]= useState('')
    useEffect(()=>{
        getTime()
    })
    const getTime = () =>{
        axios.get(`http://worldtimeapi.org/api/timezone/${match.params.qite}/${match.params.yer}`)
            .then(res => {
               setTime(res.data.datetime)
                setWeek(res.data.week_number)
                setDay(res.data.day_of_year)
            })
    }
    return(
        <div>
            <div className="container">
                <div className="card">
                    <Link className="btn-floating halfway-fab waves-light waves-effect deep-orange" to={'/'}>
                        <i className="material-icons">undo</i>
                    </Link>
                    <div className="card-content">
                        <h5 className='center deep-orange-text'>{match.params.yer}</h5>
                        <h4 className='center blue-gre  y-text'>{moment(time).format('MMMM,Do,YYYY,hh:m:ss a')}</h4>
                        <h4 className='center blue-gre  y-text'>{week} of this year</h4>
                        <h4 className='center blue-gre  y-text'>{day} day of this year</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clock;
