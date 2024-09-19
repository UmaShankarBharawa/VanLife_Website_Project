import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function VanDetail() {

  const params = useParams()
  const [van, setVan] = useState(null)

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then((data) => {
        setVan(data.vans)
      })
  }, [params.id])

  return (
    <div>
      {van ? (
        <div className='vanDetail-container'>
          <Link to={"/vans"} className='back'>&larr; <span>Back to all vans</span></Link>
          <img src={van.imageUrl} alt={van.name} className='vanDetail--vanImg' width={300} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <h4>${van.price}<span>/day</span></h4>
          <p>{van.description}</p>
          <button className='rentBtn'>Rent this van</button>
        </div>
      ) : <h1>Loading...</h1>}
    </div>
  )
}
