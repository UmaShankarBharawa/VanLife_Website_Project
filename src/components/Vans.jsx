import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {

    const [vans, setVans] = useState([]);
    console.log(vans)
    useEffect(() => {
        fetch("/api/vans")
            .then(response => response.json())
            .then(data => {
                setVans(data.vans)
            })
    }, [])

    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")
    console.log(typeFilter)

    const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

    const vanElements = displayedVans.map((van) => {
        const vanTile = (
            <Link
                to={van.id}
                key={van.id}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter
                }}
            >
                <div className="van-tile">
                    <img src={van.imageUrl} alt={van.name} width={300} />
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </div>
            </Link>
        )
        return vanTile
    })


    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }


    return (
        <div className="vans-container">
            <h1>Explore our van options</h1>
            <button
                onClick={() => handleFilterChange("type", "simple")}
                className={`filter-btn filterSimpleBtn ${typeFilter === "simple" ? "selected" : ""}`}
            >
                Simple
            </button>
            <button
                onClick={() => handleFilterChange("type", "rugged")}
                className={`filter-btn filterRuggedBtn ${typeFilter === "rugged" ? "selected" : ""}`}
            >
                Rugged
            </button>
            <button
                onClick={() => handleFilterChange("type", "luxury")}
                className={`filter-btn filterLuxuryBtn ${typeFilter === "luxury" ? "selected" : ""}`}
            >
                Luxury
            </button>
            {typeFilter ?
                (<button
                    onClick={() => handleFilterChange("type", null)}
                    className="filter-clear-btn"
                >
                    Clear filters
                </button>) : null
            }
            {vans.length > 0 ? <div className="vans--list">
                {vanElements}
            </div> : <div className="loader"></div>}
        </div>
    )
}
