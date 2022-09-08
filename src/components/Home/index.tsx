import { useContext, useEffect, useState } from 'react'
import { Climate } from '../Climate'
import { Info } from '../Info'
import { SearchBar } from '../SearchBar'
import { Container } from './style'

interface

export function Home() {
	const [lat, setLat] = useState(0)
	const [lon, setLon] = useState(0)
	const [climateData, setClimateData] = useState()

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			var lat = position.coords.latitude
			var lon = position.coords.longitude

			setLat(lat)
			setLon(lon)
		})
	}, [])

	fetch(
		`http://api.weatherbit.io/v2.0/current?lat=-23.550520&lon=-46.633308&key=1ec498f88764490dbd9730df1c5f1b95&lang=pt`
	)
		.then((response) => {
			const data = response.json()
      setClimateData(data)
      console.log(climateData)
		})
		.catch((error) => console.log(error))

	return (
		<Container>
			<SearchBar />
			<Climate />
			<Info />
		</Container>
	)
}
