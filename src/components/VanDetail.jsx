
import { Await, defer, Link, useLoaderData, useLocation } from 'react-router-dom'
import { getVan } from '../api'
import { Suspense } from 'react'

export function loader({ params }) {
  return defer({ van: getVan(params.id) })
}

export default function VanDetail() {

  const location = useLocation()
  const dataPromise = useLoaderData()

  function renderVanElement(van) {
    const search = location.state?.search || "";
    const type = location.state?.type || "all";
    return (
      <div className='van-detail-container'>
        <Link to={`..${search}`} relative="path" className='back'>&larr; <span>Back to {type} vans</span></Link>
        <img src={van.imageUrl} alt={van.name} className='van-detail--van-img' width={300} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h2>{van.name}</h2>
        <h4>${van.price}<span>/day</span></h4>
        <p>{van.description}</p>
        <button className='rent-btn'>Rent this van</button>
      </div>
    )
  }



  return (
    <div>
      <Suspense fallback={<h1 className='loader'></h1>}>
        <Await resolve={dataPromise.van}>
          {renderVanElement}
        </Await>
      </Suspense>
    </div>
  )
}
