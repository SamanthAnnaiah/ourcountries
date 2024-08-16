import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Rectangle,
} from "recharts";
import { countrydata } from "../data/countrydata";

export function Area() {
  function CustomTooltip(tipobject) {
    let { active, payload, label } = tipobject;
    if (active && payload && payload.length) {
      return (
        <div className="text-yellow-100 bg-black border rounded-xl p-1 text-sm">
          <p>{`${label} ${payload[0].value}`}</p>
        </div>
      );
    }

    return "nothing here";
  }

  return (
    <>
      <div className="w-full text-center">Countries with high area</div>
      <ResponsiveContainer width="" height={400} className="m-10 overflow-auto">
        <BarChart data={countrydata.filter((item) => item?.area > 2500000)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10, fill: "blue" }}
            angle={0} // Rotate labels
            textAnchor="middle" // Align text to the end of the tick mark
            interval={0}
          />
          <YAxis
            dataKey={"area"}
            tick={{ fontSize: 12, fill: "blue" }}
            interval={0}
            angle={-45}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            label={"Countries"}
            dataKey={"area"}
            fill="#8884d8"
            activeBar={<Rectangle fill="#8884a1" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
