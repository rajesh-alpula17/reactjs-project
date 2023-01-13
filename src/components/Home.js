import * as React from 'react';
import logo from '../logo.svg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { axiosInstance, GET_BATCHES , STUDENTS} from '../api';

export default function Home() {

  const [coursesList, setCoursesList] = React.useState([]);
  React.useEffect(() => {
    axiosInstance.get(STUDENTS, {})
      .then((response) => {
        setCoursesList(response.data);
        
      })
      .catch((error) => {
        
      });

  },[])
  return (
    <>
      <div className="container">
        <div className="float-end text-right"><a href="">Load More</a></div>        
      </div>
    </>
  );
}