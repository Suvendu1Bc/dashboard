import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid,
		Legend, Tooltip } from 'recharts';

const StackedBarChart = () => {

	// Sample data
	const data = [
		{ name: "Jan", Approval: 30, Pending: 70 ,Rejected: 40},
		{ name: "Feb", Approval: 12, Pending: 88 ,Rejected: 40},
		{ name: "Mar", Approval: 15, Pending: 85 ,Rejected: 40},
		{ name: "Apr", Approval: 35, Pending: 65 ,Rejected: 40},
		{ name: "May", Approval: 54, Pending: 46 ,Rejected: 40},
		{ name: "Jun", Approval: 72, Pending: 28 ,Rejected: 40},
		{ name: "July", Approval: 32, Pending: 68 ,Rejected: 40}
	];
	return (
		<BarChart width={1000
        } height={230} data={data} >
			{/* <CartesianGrid /> */}
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="Approval" stackId="a" fill="#4682A9" />
			<Bar dataKey="Pending" stackId="a" fill="#749BC2" />
			<Bar dataKey="Rejected" stackId="a" fill="#91C8E4" />

		</BarChart>
	);
}

export default StackedBarChart;
