import { useState, CSSProperties } from "react";
import PacManLoader from "react-spinners/PacmanLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loading = ({loading}) => {
//   let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#0086B0");

  return (
    <div className="py-5">
      <PacManLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
