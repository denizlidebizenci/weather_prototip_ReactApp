import React from 'react'
import "../index.css";
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

function HavaDurumu(props) {
    const {weather} = props

if (!weather) {
    return (
      <Alert severity="info">Yükleniyor</Alert>
    )
}




  return (
    

    <div className='all'>
      <Typography variant="h5" component="div" gutterBottom>

</Typography>

<h3>{weather.name}</h3>
<h4>{weather.weather.map((data)=>data.description).join(', ')}</h4>
<p>{weather.main.temp} derece</p>
<p>{new Date(weather.dt * 1000).toLocaleDateString()}</p>
    </div>
  )
}

export default HavaDurumu