import '../../style/components/graphiques/Graphiques.css';
import {
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    CartesianGrid
} from 'recharts';
import GraphUserLegende from "./GraphUserLegende"
import TooltipCustom from './TooltipCustom';


function GraphUserActivity(props) {

    const sessionUser = props.sessionUser

    return (
        <div className="GraphUserActivity">
            <GraphUserLegende />
            <BarChart
                width={750}
                height={300}
                data={sessionUser}
            >
                <XAxis axisLine={true} tickLine={false} tickSize={16} stroke={"#9B9EAC"} domain={[50, 100]}/>
                <YAxis axisLine={false} tickLine={false} orientation="right" tickSize={44} stroke={"#9B9EAC"} tickCount={3}/>
                <Tooltip content={<TooltipCustom />} />
                <CartesianGrid strokeDasharray="2 2" horizontal={true} vertical={false} />
                <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} barSize={7} />
                <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} barSize={7} />
            </BarChart>
        </div>
    );
}

export default GraphUserActivity;
