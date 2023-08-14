import { useEffect, useState } from "react";

const useCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true)

    // console.log(cars);

    useEffect(()=>{
        fetch('cars.json')
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            setCars(data)
        })
    },[])
    return[cars, loading]
};

export default useCars;