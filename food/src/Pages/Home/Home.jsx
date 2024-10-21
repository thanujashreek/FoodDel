import React,{useState} from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Explore from '../../Components/Explore/Explore'
import FoodDisplay from '../../Components/Fooddisplay/FoodDisplay'

const Home = () => {
    const [category,setCategory]= useState("All");
  return (
    <div>
      <Header></Header>
      <Explore category={category} setCategory={setCategory}></Explore>
      <FoodDisplay category={category}></FoodDisplay>
    </div>
  )
}

export default Home
