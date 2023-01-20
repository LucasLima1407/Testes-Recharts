import React from "react";
import "./App.css";
import { PieChart,Pie,Tooltip,Cell,Legend } from "recharts";

const App = () => {
  const data = [
    { name: "Aprovados", value: 300},
    { name: "Reprovados", value: 150},
  ];

  const COLORS = ['#164212', '#ff0000'];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Aprovados/Reprovados</h1>
      <div className="App">
        <PieChart width={400} height={400}>
        <Legend layout="horizontal" verticalAlign="top"/>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={120}
            outerRadius={80}
            fill="#8884d8"
            label
          >
          {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
              </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};
export default App;