import React from 'react';
import './WeatherReports.scss';
import {Images} from '../../Constants';

const Slides=[
  {
    CountryName:"Russia",
    CaptialName:"Moscow",
    color:"#F5F5F5",
    Image:Images.Mosco,
  },
  {
    CountryName:"Japan",
    CaptialName:"Tokyo",
    color:"#FFD4FB",
    Image:Images.Tokyo,
  },
  {
    CountryName:"Ukraine",
    CaptialName:"Kyiv",
    color:"#D7DAFF",
    Image:Images.Kejiv,
  },

]

const WeatherReports = () => {
  return (
    <div  className='WeatherReports__Container'>
      <div className='WeatherReports__Header'>
        <span className='WeatherReports__Title'>
          Weather Reports
        </span>
        <span className='WeatherReports__Button'>
          <img src={Images.Filter} alt="Filters" />
        </span>
      </div>
      <div className='WeatherReports__Cards'>
           {
            Slides.map((item,i)=>(
              <div key={i}  className='WeatherReports__SliderCard' style={{backgroundColor:`${item.color}`,borderRadius:'15px',padding:'0rem 1rem' }}>
                    <span style={{display:'block',marginTop:'1rem',marginLeft:'1rem',fontSize:'20px'} }>{item.CaptialName}</span>
                    <span style={{display:'block',marginLeft:'1rem',fontSize:'15px',paddingTop:'5px'}}>{item.CountryName}</span>
                    <img src={item.Image}/>
              </div>
            ))
           }
      </div>
    </div>
  )
}

export default WeatherReports