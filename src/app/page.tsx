"use client"
import axios from "axios";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
const TICKETS_NUMBER = 121;

export default function Home() {
  const [ticketsNumber, setTicketsNumber] = useState(1);
  const [ticketsLeft, setTicketsLeft] = useState(TICKETS_NUMBER);
  const [ticketsPrice, setTicketsPrice] = useState(10)

  const handleInputChange = (e: any) => {
    const number = Number(e.target.value);

    if (number >= 0 && number <= TICKETS_NUMBER + 1) {
      setTicketsNumber(e.target.value);
    }

  }

  useEffect(() => {
    if (ticketsNumber >= 0 && ticketsNumber <= 10) {
      setTicketsPrice(10)
    } else if (ticketsNumber >= 11 && ticketsNumber <= 20) {
      setTicketsPrice(9)
    }
    else if (ticketsNumber >= 21 && ticketsNumber <= 35) {
      setTicketsPrice(8)

    } else {
      setTicketsPrice(7)
    }
  }, [ticketsNumber]);
  const handleButtonClick = () => {
    console.log(typeof ticketsNumber, ticketsNumber);
    try {
      axios.post('/test-api', { ticketsNumber: Number(ticketsNumber) + 1 })
    } catch (e) { }
  }


  return (
    <main className={styles.main}>
      <div>
        <h1>Tickets</h1>
        <h2>Resarve tickets reserve for 5 minutes</h2>
        <p>Tickets left: {TICKETS_NUMBER}</p>

        <input value={ticketsNumber} onChange={handleInputChange} placeholder="Choose tickets number" type="number" />

        <p>Price: {ticketsPrice}</p>
        <p>Total Price:{ticketsNumber * ticketsPrice}</p>
        <button onClick={handleButtonClick} className={styles.button}>
          RESERVE
        </button>
      </div>
      <p className={styles.invisible}>TODO: Add Footer</p>
    </main>
  );
}
