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


function GraphUserActivity(props) {

    const sessionUser = props.sessionUser
    console.log(sessionUser)
    return (
        <div className="GraphUserActivity">
            <GraphUserLegende />
            <BarChart
                width={700}
                height={300}
                data={sessionUser}
            >
                <XAxis axisLine={true} tickLine={false}/>
                <YAxis axisLine={false} tickLine={false} orientation="right" />
                <Tooltip />
                <CartesianGrid strokeDasharray="2" horizontal={true} vertical={false} />
                <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} barSize={7} />
                <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} barSize={7} />
            </BarChart>
        </div>
    );
}

export default GraphUserActivity;
