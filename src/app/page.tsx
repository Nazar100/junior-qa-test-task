"use client"
import axios from "axios";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
const TICKETS_NUMBER = 121;

export default function Home() {
  const [ticketsNumber, setTicketsNumber] = useState(1);
  const [ticketsPrice, setTicketsPrice] = useState(10);
  const [isPopupVisible, setIsPopupVisible] = useState(false)

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

  const handleButtonClick = async () => {
    try {
      await axios.post('/test-api', { ticketsNumber: Number(ticketsNumber) + 1 })
    } catch (e) { }

    setIsPopupVisible(true);
  }


  const handleClosePopup = () => { window.location.reload(); }


  return (
    <main className={styles.main}>
      <div>
        <h1>Tickets</h1>
        <h2>Resarve tickets for 5 minutes</h2>
        <p>Tickets left: {TICKETS_NUMBER}</p>

        <input value={ticketsNumber} onChange={handleInputChange} placeholder="Choose tickets number" type="number" />

        <p>Price: {ticketsPrice}</p>
        <p>Total Price: {ticketsNumber * ticketsPrice}</p>
        <button onClick={handleButtonClick} className={styles.button}>
          RESERVE
        </button>
      </div>
      <p className={styles.invisible}>TODO: Add Footer</p>
      {isPopupVisible && (
        <div className={styles['popup-overlay']}>
          <div className={styles.popup}>
            <h2>Reservation Successful!</h2>
            <p>Your tickets have been reserved for 5 minutes.</p>
            <button onClick={handleClosePopup} className={styles['close-button']}>
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
