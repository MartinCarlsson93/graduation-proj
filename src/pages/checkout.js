import { useState } from "react";
import styles from "../Styles/checkout.module.css";

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    // Send checkout data to server
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        address,
        city,
        country,
        zipCode,
        cardNumber,
        expiryDate,
        cvv,
      }),
    });

    setIsSubmitting(false);

    if (response.ok) {
      // Show thank you message
      setName("");
      setEmail("");
      setAddress("");
      setCity("");
      setCountry("");
      setZipCode("");
      setCardNumber("");
      setExpiryDate("");
      setCvv("");
      setIsSubmitted(true);
    } else {
      // Handle error
      console.error("Checkout failed.");
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <div className={styles.thankYouMessage}>
          Thank you for your order!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.checkoutForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`${styles.formControl} ${styles.customInput}`}
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${styles.formControl} ${styles.customInput}`}
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`${styles.formControl} ${styles.customInput}`}
              placeholder="Enter your address"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={`${styles.formControl} ${styles.customInput}`}
              placeholder="Enter your city"
            />
            </div>
         
         <div className={styles.formGroup}>
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className={`${styles.formControl} ${styles.customInput}`}
              placeholder="Enter your country"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="zipCode">Zip Code:</label>
            <input
              type="text"
              id="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className={`${styles.formControl} ${styles.customInput}`}
              placeholder="Enter your zip code"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className={`${styles.formControl} ${styles.customInput}`}
              placeholder="Enter your card number"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className={`${styles.formControl} ${styles.customInput}`}
              placeholder="Enter your expiry date (MM/YY)"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className={`${styles.formControl} ${styles.customInput}`}
              placeholder="Enter your CVV"
            />
          </div>
          <button
            type="submit"
            className={`${styles.btn} ${styles.customBtn}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}



