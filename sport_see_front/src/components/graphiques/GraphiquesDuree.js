import '../../style/components/graphiques/GraphiquesDuree.css';

import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import TooltipCustomDuree from './TooltipCustomDuree';

function GraphiquesDuree(props) {

    const userAverageSessions = props.userAverageSessions
    console.log(userAverageSessions)

    for(let i = 0 ; userAverageSessions.sessions.length < i ; i++){
        console.log("test")
    }


    return (
        <div className="GraphiquesDuree">
            <ResponsiveContainer width="100%" height={263}>
            <LineChart
                data={userAverageSessions.sessions}
            >
                <XAxis axisLine={false} tickLine={false}  dataKey="day" stroke="#FFFFFF67" padding={{ left: 14, right: 14  }}/>
                <Tooltip content={<TooltipCustomDuree />}/>
                <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF67" strokeWidth={2} dot={false} activeDot={{stroke: 'rgba(255, 255, 255, 0.6)',r:4 , strokeWidth: 8}}/>
            </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default GraphiquesDuree;
