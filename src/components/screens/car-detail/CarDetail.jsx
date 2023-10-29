import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CarService } from '../../../services/car.service'
import CarItem from '../home/car-item/CarItem'
import styles from './CarDetail.module.css'

export default function CarDetail() {
    const [car, setCar] = useState({})
    const { id } = useParams()
    useEffect(() => {
        if(!id) return

        const fetchData = async () => {
          const data = await CarService.getById(id)
    
          setCar(data)
        }
        fetchData()
      }, [id])
  return (
    <div>
      <Link className={styles.btn} to = '/'>Back</Link>
      <CarItem car={car}/>
    </div>
  )
}
