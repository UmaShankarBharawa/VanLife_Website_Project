
import { Link, useLoaderData, useLocation } from 'react-router-dom'
import { getVans } from '../api'

export function loader({ params }) {
  return getVans(params.id)
}

export default function VanDetail() {

  const location = useLocation()
  const van = useLoaderData()



  const search = location.state?.search || "";
  const type = location.state?.type || "all";


  return (
    <div>
      <div className='van-detail-container'>
        <Link to={`..${search}`} relative="path" className='back'>&larr; <span>Back to {type} vans</span></Link>
        <img src={van.imageUrl} alt={van.name} className='van-detail--van-img' width={300} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h2>{van.name}</h2>
        <h4>${van.price}<span>/day</span></h4>
        <p>{van.description}</p>
        <button className='rent-btn'>Rent this van</button>
      </div>
    </div>
  )
}
