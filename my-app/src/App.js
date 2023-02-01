import React from "react";
import "./App.css";
import { PieChart,Pie,Tooltip,Cell,Legend } from "recharts";

const App = () => {
    const data = require('./dados.json')

  const COLORS = ['#164212', '#ff0000'];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Aprovados/Reprovados</h1>
      <div className="App">
        <PieChart width={400} height={400}>
        <Legend layout="horizontal" verticalAlign="top"/>
          <Pie
          //Indicando de onde vamos pegar os dados no json
            dataKey="Value"
            nameKey="Name"
            isAnimationActive={false}
            //Pegando os dados da constante que criamos anteriormente
            data={data} 
            //cx e cy pra posicionamento
            cx={200}
            cy={120}
            outerRadius={90} 
            fill="#8884d8"
            //Mostrar os valores na tabela (Variável Value)
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