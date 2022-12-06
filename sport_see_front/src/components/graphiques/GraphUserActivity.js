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
                width={700}
                height={300}
                data={sessionUser}
            >
                <XAxis axisLine={true} tickLine={false} tickSize={16} stroke={"#9B9EAC"} />
                <YAxis axisLine={false} tickLine={false} orientation="right" tickSize={44} stroke={"#9B9EAC"}/>
                <Tooltip content={<TooltipCustom />}/>
                <CartesianGrid strokeDasharray="2 2" horizontal={true} vertical={false} />
                <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} barSize={7} />
                <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} barSize={7} />
            </BarChart>
        </div>
    );
}

export default GraphUserActivity;
