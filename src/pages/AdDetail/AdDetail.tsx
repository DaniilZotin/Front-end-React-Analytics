import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import "./AdDetail.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

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



const AdDetailPage: React.FC = () => {

    const [advert, setAdvert] = useState<AdData[]>([])

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

				})
				.catch(error => {
					console.error('Was error in fetch data', error)

				})
		}, [])


	const { id } = useParams<{ id: string }>()
	const ad = advert.find(ad => ad.id === parseInt(id || '0'))


	if (!ad) {
		return <div>Ad not found</div>
	}

    const options = {
			plugins: {
				legend: {
					display: false,
				},
			},
		}

	const chartData = {
		labels: [
			'Click-Through Rate(%)',
			'Cost Per Click(%)',
			'Cost Per Acquisition($)',
			'Conversions',
			'Bounce Rate(%)',
		],
		datasets: [
			{
				label: '',
				data: [ad.ctr, ad.cpc, ad.cpa, ad.conversion, ad.bounceRate],
				backgroundColor: [
					'rgba(255, 159, 64, 0.6)',
					'rgba(66, 137, 232, 0.6)',
					'rgba(156, 94, 223, 0.6)',
					'rgba(232, 229, 66, 0.6)',
					'rgba(76, 186, 39, 0.6)',
				],
			},
		],
	}

	return (
		<div className='intro__board'>
			<div className='title__wrapper'>
				<h1 className='title__details'>Information about "{ad.name}"</h1>
			</div>

			<Bar data={chartData} options={options} />
			<div className='title__wrapper'>
				<h1 className='title__details'>Additional</h1>
			</div>
			<div className='additional'>
				<p>Impressions: {ad.impression}</p>
				<p>Clicks: {ad.click}</p>
				<p>Average time on site: {ad.avgTimeOnSite}</p>
			</div>
		</div>
	)
}

export default AdDetailPage
