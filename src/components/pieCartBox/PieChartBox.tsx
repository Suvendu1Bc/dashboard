import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

const data = [
  { name: "HALB", value: 20, color: "#0088FE" },
  { name: "FERT", value: 27, color: "#00C49F" },
  { name: "ROH", value: 53, color: "#FFBB28" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox" style={{height:'100%'}}>
      <div className="chart">
        <ResponsiveContainer width="80%" height={200}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
              <span>{item.value}%</span>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
