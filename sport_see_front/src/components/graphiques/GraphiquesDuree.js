import '../../style/components/graphiques/GraphiquesDuree.css';

import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

function GraphiquesDuree(props) {

    const userAverageSessions = props.userAverageSessions

    return (
        <div className="GraphiquesDuree">
            <ResponsiveContainer width="100%" height={263}>
            <LineChart
                data={userAverageSessions.sessions}
            >
                <XAxis axisLine={false} tickLine={false}  dataKey="day" stroke="#FFFFFF"/>
                <Tooltip />
                <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" dot={false}/>
            </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default GraphiquesDuree;
