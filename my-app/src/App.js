import React from "react";
import "./App.css";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const App = () => {
    const data = require('./dados.json')

    const RADIAN = Math.PI/180
    //Calculando o posicionamento dos dados dentro do gráfico
    const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, Value}) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        //Definindo o posicionamento dos valores na frente da label
        <text
          key={index}
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

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
            cy={100}
            outerRadius={90} 
            fill="#8884d8"
            //Para não aparecer a linha que indica os números
            labelLine={false}
            //Mostrar os valores na tabela (Variável Value)
            label={renderLabel}
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