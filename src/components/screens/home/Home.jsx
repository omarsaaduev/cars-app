import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import { cars as carsData } from "./cars.data.js";
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm";
import axios from "axios";
import { CarService } from "../../../services/car.service";
import { AuthContext } from "../../../providers/AuthProvider";





export default function Home() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getAll()
      setCars(data)
    }

    fetchData()
  }, [])
  
  const { user, setUser} = useContext(AuthContext)

  return (
    <div>
      <h1>Cars catalog </h1>
      {user ? (
        <>
        <h2>Welcome, {user.name}</h2>
        <button onClick={() => setUser(null)}>Logout</button>
        </>
      ) : (
        <button onClick = {() => setUser({
            name: 'Max',
        })}>
          Login
        </button>
      )}
      <CreateCarForm setCars={setCars} />
      
      <div>
        {cars.length ? (cars.map((car) => (
          <CarItem key={car.id} car = {car} />
        )))
      : <p>Not cars</p>
      }
      </div>
    </div>
  );
}

