import rocketLaunch from "../../public/Assets/svgs/RocketLaunch.svg";
import Image from "next/image";

function Succesful() {
  return (
    <div className="main-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image src={rocketLaunch} alt="Rocket" width={200} height={300} />

        <h2>Your order has Succesfully been registered</h2>
        <h4>Thank you for ordering from Grocify</h4>
        <h4>Your ordernumber is: 2462 2315</h4>
      </div>
    </div>
  );
}

export default Succesful;
