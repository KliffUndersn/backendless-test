import { useState } from "react";
import { BarChart } from "./shared/chart";
import { useForm } from "./shared/components/hooks";

const initialState = {
  title: "От чего зависит трудоустройство",
  xAxisName: "Фаза луны",
  zAxisName: "Уровень воды в мировом океане",
  xAxisLabels:
    "Молодая луна, Полнолуние, Уходящий месяц, Молодая луна, Молодая луна, Уходящий месяц, Уходящий месяц, Уходящий месяц, Уходящий месяц, Полнолуние,",
  zAxisValues: "8,6,8,4,5,6,8,9,7,6,5",
};
const containerStyle = {
  maxWidth: "500px",
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

function App() {
  const [data, handleChange, handleSubmit] = useForm(initialState, onSubmit);
  const [labels, setLabels] = useState(data.xAxisLabels);
  const [chartType, setChartType] = useState("bar");
  const labelChangeHandler = ({ target }) => {
    const { value } = target;
    setLabels(value);
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
        <div>
          <input type="radio" value="bar" checked={chartType == "bar"} onChange={radioHandler} />
          <p style={{ display: "inline-block" }}>Bar chart</p>
        </div>
        <div>
          <input type="radio" value="line" checked={chartType == "line"} onChange={radioHandler} />
          <p style={{ display: "inline-block" }}>Line chart</p>
        </div>
      </form>
    </>
  );
}

export default App;
