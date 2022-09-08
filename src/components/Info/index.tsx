import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container, Degree, Local } from './style'

export function Info() {
	const [lat, setLat] = useState<number>()
	const [lon, setLon] = useState<number>()
	const [weather, setWeather] = useState<[]>()

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			let lat = position.coords.latitude
			let lon = position.coords.longitude

			setLat(lat)
			setLon(lon)
		})
	}, [])

	useEffect(() => {
		fetch(
			// `http://api.weatherapi.com/v1/current.json?key=3a88359a69c04f9b8f004130223008&q=${lat},${lon}`
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=584df4b939b7575f5233bb8375f0b5f9`
		)
			.then((response) => {
        const data = response
        console.log(data)
				// setWeather(data)
			})
			.catch((error) => console.log(error))
	}, [])

	console.log(weather)

	return (
		<Container>
			<Local>SÃO PAULO</Local>
			<Degree>18 °C</Degree>
		</Container>
	)
}
