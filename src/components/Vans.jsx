import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Vans() {

    const [simpleFilter, setSimpleFilter] = useState(false)
    const [ruggedFilter, setRuggedFilter] = useState(false)
    const [luxuryFilter, setLuxuryFilter] = useState(false)

    function selectFilter(set) {
        set(prevState => !prevState)
    }

    const simpleStyles = {
        backgroundColor: simpleFilter ? "#E17654" : "#ffead0",
        color: simpleFilter ? "#ffead0" : "#4D4D4D"
    }


    const ruggedStyles = {
        backgroundColor: ruggedFilter ? "#115E59" : "#ffead0",
        color: ruggedFilter ? "#ffead0" : "#4D4D4D"
    }

    const luxuryStyles = {
        backgroundColor: luxuryFilter ? "#161616" : "#ffead0",
        color: luxuryFilter ? "#ffead0" : "#4D4D4D"
    }

    function clearFilter() {
        setSimpleFilter(false)
        setRuggedFilter(false)
        setLuxuryFilter(false)
    }

    const [vans, setVans] = useState([]);
    console.log(vans)
    useEffect(() => {
        fetch("/api/vans")
            .then(response => response.json())
            .then(data => {
                setVans(data.vans)
            })
    }, [])


    const vanElements = vans.map((van) => {
        const vanTile = (
            <Link to={`/vans/${van.id}`} key={van.id}>
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
        {
            if (simpleFilter && van.type === "simple") {
                return vanTile
            } else if (ruggedFilter && van.type === "rugged") {
                return vanTile
            } else if (luxuryFilter && van.type === "luxury") {
                return vanTile
            } else if (!simpleFilter && !ruggedFilter && !luxuryFilter) {
                return vanTile
            }
        }

    })

    return (
        <div className="vans-container">
            <h1>Explore our van options</h1>
            <button onClick={() => selectFilter(setSimpleFilter)} style={simpleStyles} className="filterBtn filterSimpleBtn">Simple</button>
            <button onClick={() => selectFilter(setRuggedFilter)} style={ruggedStyles} className="filterBtn filterRuggedBtn">Rugged</button>
            <button onClick={() => selectFilter(setLuxuryFilter)} style={luxuryStyles} className="filterBtn filterLuxuryBtn">Luxury</button>
            <button onClick={clearFilter} className="filterClearBtn">Clear filters</button>
            <div className="vans--list">
                {vanElements}
            </div>
        </div>
    )
}
