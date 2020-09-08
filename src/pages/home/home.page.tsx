import React, { useEffect, useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';
import moment from 'moment';

import { Container, Image, SelectContainer } from './home.styles';

const DAYS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type HolidaysState = {
	name: string;
	states: string | string[];
	type: string[];
	description: string;
	country: {
		id: string;
		name: string;
	};
	date: {
		datetime: {
			year: number;
			month: number;
			day: number;
		};
		iso: string;
	};
};

type Holidays = {
	data: {
		response: {
			holidays: HolidaysState[];
		};
	};
};

const HomePage: React.SFC = () => {
	const [holidaysState, setHolidaysState] = useState<
		HolidaysState[] | undefined
	>(undefined);

	const fetchHolidays = async () => {
		const {
			data: {
				response: { holidays },
			},
		}: Holidays = await axios.get(
			`https://calendarific.com/api/v2/holidays?&api_key=${process.env.REACT_APP_CALENDARIFIC_API_KEY}&country=BR&year=2020`
		);
		setHolidaysState(holidays);
	};

	const searchForHolidays = (day: string) => {
		const foundHolidays: HolidaysState[] = [];

		for (let holiday of holidaysState!) {
			const holidayDay = moment(holiday.date.iso).format('dddd');
			if (holidayDay === day) {
				foundHolidays.push(holiday);
			}
		}
		console.log(foundHolidays);
	};

	useEffect(() => {
		if (!holidaysState) fetchHolidays();
		if (holidaysState) searchForHolidays('Friday');
	});

	return (
		<Container>
			<Image src={require('../../images/calendar-colour.svg')} />
			<SelectContainer>
				<p>Eu quero viajar por </p>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					variant='outlined'
				>
					{DAYS.map((day) => (
						<MenuItem value={day}>{day}</MenuItem>
					))}
				</Select>
				<p>dias.</p>
			</SelectContainer>
			<Button
				variant='contained'
				color='primary'
				startIcon={<SendIcon />}
			>
				Enviar
			</Button>
		</Container>
	);
};

export default HomePage;
