import { useState } from "react";
import { BarChart } from "./shared/chart";
import { useForm } from "./shared/components/hooks";

const initialState = {
  title: "От чего зависит трудоустройство",
  xAxisName: "Фаза луны",
  zAxisName: "Уровень воды в мировом океане",
  xAxisLabels:
    "Молодая луна, Полнолуние, Уходящий месяц, Молодая луна, Молодая луна, Уходящий месяц, Уходящий месяц, Уходящий месяц, Уходящий месяц, Полнолуние",
  zAxisValues: "8,6,8,4,5,6,8,9,7,6,5,7",
};
const containerStyle = {
  maxWidth: "70vw",
  margin: "0 auto",
  justifyContent: "center",
  color: "black",
  padding: "20px",
  fontFamily: "Arial",
  display: "flex",
  flexDirection: "column",
  border: "1px black solid",
  borderRadius: "5px",
};
const buttonList = ["bar", "line", "doughnut"];

function App() {
  const [data, handleChange, handleSubmit] = useForm(initialState, onSubmit);
  const [labels, setLabels] = useState(data.xAxisLabels);
  const [chartType, setChartType] = useState(buttonList[0]);

  const labelChangeHandler = ({ target }) => {
    setLabels(target.value);
  };
  const radioHandler = ({ target }) => {
    if (target.value !== chartType) setChartType(target.value);
  };
  function onSubmit() {}
  return (
    <>
      <form onSubmit={handleSubmit} className="App" style={containerStyle}>
        <h3>{data.title}</h3>
        <p>{data.xAxisName}</p>
        <input type="submit" hidden />
        <input
          type="text"
          onChange={labelChangeHandler}
          onBlur={handleChange}
          name="xAxisLabels"
          required
          placeholder="xAxis"
          value={labels}
        />
        <p>{data.zAxisName}</p>
        <input
          type="text"
          onChange={handleChange}
          name="zAxisValues"
          required
          placeholder="zAxis"
          value={data.zAxisValues}
        />
        <BarChart value={data} type={chartType} />
        {buttonList.map((el) => {
          return (
            <div key={el}>
              <input type="radio" value={el} checked={chartType == el} onChange={radioHandler} />
              <p style={{ display: "inline-block" }}>
                {el.charAt(0).toUpperCase() + el.slice(1)} chart
              </p>
            </div>
          );
        })}
      </form>
    </>
  );
}

export default App;
