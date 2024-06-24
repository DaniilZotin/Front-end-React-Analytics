import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'
import searchImage from '../../img/icons/search.png'

interface AdData {
	id: number
	name: string
	click: number
	impression: number
	ctr: number
	cpc: number
	cpa: number
	conversion: number
	bounceRate: number
	avgTimeOnSite: string
}

const DashboardPage: React.FC = () => {
	const [searchText, setSearchText] = useState('')
	const [advert, setAdvert] = useState<AdData[]>([])
	const [filteredAdvert, setFilteredAdvert] = useState<AdData[]>([])
	const [error, setError] = useState<string | null>(null)
	const navigate = useNavigate()

	useEffect(() => {
		fetch('http://localhost:8094/api/analytics/getDataAnalytics')
			.then(response => {
				if (!response.ok) {
					return response.text().then(errorMessage => {
						throw new Error(errorMessage)
					})
				}
				return response.json()
			})
			.then(data => {
				setAdvert(data)
				setFilteredAdvert(data)
			})
			.catch(error => {
				console.error('Was error in fetch data', error)
				setError(error.message)
			})
	}, [])

	const handleSearch = () => {
		const filtered = advert.filter(ad =>
			ad.name.toLowerCase().includes(searchText.toLowerCase())
		)
		setFilteredAdvert(filtered)
	}

	return (
		<div className='main'>
			<div className='input__field'>
				<button className='button__search' onClick={handleSearch}>
					<img className='img__search' src={searchImage} alt='Search' />
				</button>
				<input
					className='input__filter'
					placeholder='input name of AD'
					value={searchText}
					onChange={e => setSearchText(e.target.value)}
				/>
			</div>
			{error ? (
				<div>{error}</div>
			) : (
				<div className='ad__list'>
					{filteredAdvert.length === 0 ? (
						<p>Not found</p>
					) : (
						<ul className='list__wrapper'>
							{filteredAdvert.map(ad => (
								<li
									className='ad__item'
									key={ad.id}
									onClick={() => navigate(`/ad/${ad.id}`)}
								>
									{ad.name}
								</li>
							))}
						</ul>
					)}
				</div>
			)}
		</div>
	)
}

export default DashboardPage
