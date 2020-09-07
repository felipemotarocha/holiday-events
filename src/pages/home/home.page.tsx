import React, { useEffect } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import axios from "axios";

import { Container, Image, SelectContainer } from "./home.styles";

const DAYS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const HomePage: React.SFC = () => {
  const fetchHolidays = async () => {
    const {
      data: {
        response: { holidays },
      },
    } = await axios.get(
      `https://calendarific.com/api/v2/holidays?&api_key=${process.env.REACT_APP_CALENDARIFIC_API_KEY}&country=US&year=2019`
    );
    console.log(holidays);
  };

  useEffect(() => {
    fetchHolidays();
  });

  return (
    <Container>
      <Image src={require("../../images/calendar-colour.svg")} />
      <SelectContainer>
        <p>Eu quero viajar por </p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="outlined"
        >
          {DAYS.map((day) => (
            <MenuItem value={day}>{day}</MenuItem>
          ))}
        </Select>
        <p>dias.</p>
      </SelectContainer>
      <Button variant="contained" color="primary" startIcon={<SendIcon />}>
        Enviar
      </Button>
    </Container>
  );
};

export default HomePage;
