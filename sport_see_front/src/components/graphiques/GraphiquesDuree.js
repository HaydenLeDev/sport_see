import '../../style/components/graphiques/GraphiquesDuree.css';

import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    YAxis
} from 'recharts';
import TooltipCustomDuree from './TooltipCustomDuree';

function GraphiquesDuree(props) {

    const userAverageSessions = props.userAverageSessions
    console.log(userAverageSessions)
    var average = 0

    //calcule de la moyenne
    for(let i = 0 ; i < userAverageSessions.sessions.length ; i++){
        average += userAverageSessions.sessions[i].sessionLength
        console.log("moyenne sans div" + i + " " + average)
        userAverageSessions.sessions[i].sessionLength = average
    }
    for(let i = 0 ; i < userAverageSessions.sessions.length ; i++){
        userAverageSessions.sessions[i].sessionLength = userAverageSessions.sessions[i].sessionLength / (i+1)
        console.log( i + " : " + userAverageSessions.sessions[i].sessionLength)
    }


    return (
        <div className="GraphiquesDuree">
            <ResponsiveContainer width="100%" height={263}>
            <LineChart
                data={userAverageSessions.sessions}
            >
                <YAxis />
                <XAxis axisLine={false} tickLine={false}  dataKey="day" stroke="#FFFFFF67" padding={{ left: 14, right: 14  }}/>
                <Tooltip content={<TooltipCustomDuree />}/>
                <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF67" strokeWidth={2} dot={false} activeDot={{stroke: 'rgba(255, 255, 255, 0.6)',r:4 , strokeWidth: 8}}/>
            </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default GraphiquesDuree;
