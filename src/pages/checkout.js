import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/checkout.module.css";

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
  const [answer, setAnswer] = useState("");
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    // Send checkout data to server
    setAnswer("Rederecting...");

    router.push("/succesful");
  };

  return (
    <div>
      {isSubmitted ? (
        <div className={styles.thankYouMessage}>Thank you for your order!</div>
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
              required="true"
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
              type="number"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className={`${styles.formControl} ${styles.customInput}`}
              placeholder="Enter your card number"
              required="true"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="date"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className={`${styles.formControl} ${styles.customInput}`}
              placeholder="Enter your expiry date (MM/YY)"
              required="true"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="number"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className={`${styles.formControl} ${styles.customInput}`}
              placeholder="Enter your CVV"
              required="true"
            />
          </div>
          <button
            type="submit"
            className={`${styles.btn} ${styles.customBtn}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          <div style={{ marginTop: "16px" }}>
            <p style={{ fontSize: "18px", paddingLeft: "8px" }}>{answer}</p>
          </div>
        </form>
      )}
    </div>
  );
}
