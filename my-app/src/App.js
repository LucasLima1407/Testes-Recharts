import React from "react";
import "./App.css";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell
} from "recharts";

const App = () => {
  const data = [
    { name: "Aprovados", value: 1000000000 },
    { name: "Reprovados", value: 1500000000 },
  ];

  const COLORS = ['#ff0000', '#164212'];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Aprovados/Reprovados</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};
export default App;