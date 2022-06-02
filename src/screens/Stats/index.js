import React from "react";
import BarChart from "../../components/BarChart";
import PrimaryButton from "../../components/PrimaryButton";
import "./styles.scss";

const datas = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [60, 30, 40, 20, 30],
];
var i = 0;

function Stats() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    changeData();
  }, []);

  const changeData = () => {
    setData(datas[i++]);
    if (i === datas.length) i = 0;
  };

  return (
    <div className="statsContainer">
      <PrimaryButton onClick={changeData}>Change</PrimaryButton>
      <BarChart width={600} height={400} data={data} />
    </div>
  );
}

export default Stats;
