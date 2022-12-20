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

    //Mise les index des jours
    for(let i = 0; i < sessionUser.length; i++){
        sessionUser[i].day = i + 1
    }

    return (
        <div className="GraphUserActivity">
            <GraphUserLegende />
            <BarChart
                width={750}
                height={300}
                data={sessionUser}
            >
                <XAxis axisLine={true} tickLine={false} tickSize={16} stroke={"#9B9EAC"} dataKey='day'/>
                <YAxis dataKey="kilogram" yAxisId="kilogram" axisLine={false} tickLine={false} orientation="right" tickSize={20} domain={['dataMin-7', 'dataMax']} stroke={"#9B9EAC"} tickCount={3}/>
                <YAxis dataKey="calories" yAxisId="calories" orientation="left" domain={['dataMin-150', 'dataMax+150']} hide="true"/>
                <Tooltip content={<TooltipCustom />} />
                <CartesianGrid strokeDasharray="2 2" horizontal={true} vertical={false} />
                <Bar dataKey="kilogram" yAxisId="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} barSize={7} />
                <Bar dataKey="calories" yAxisId="calories" fill="#E60000" radius={[10, 10, 0, 0]} barSize={7} />
            </BarChart>
        </div>
    );
}

export default GraphUserActivity;
