import { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

export default function VanDetail() {

  const params = useParams()
  const location = useLocation()
  console.log(location)
  const [van, setVan] = useState(null)

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then((data) => {
        setVan(data.vans)
      })
  }, [params.id])

  const search = location.state?.search || ""
  const type = location.state?.type || "all"
  console.log(type)

  return (
    <div>
      {van ? (
        <div className='van-detail-container'>
          <Link to={`..${search}`} relative="path" className='back'>&larr; <span>Back to {type} vans</span></Link>
          <img src={van.imageUrl} alt={van.name} className='van-detail--van-img' width={300} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <h4>${van.price}<span>/day</span></h4>
          <p>{van.description}</p>
          <button className='rent-btn'>Rent this van</button>
        </div>
      ) : <div className="loader"></div>}
    </div>
  )
}
