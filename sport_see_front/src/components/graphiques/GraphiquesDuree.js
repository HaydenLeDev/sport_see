import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip, Legend,
    ResponsiveContainer
} from 'recharts';

function GraphiquesDuree(props) {

    const userAverageSessions = props.userAverageSessions
    console.log(userAverageSessions.sessions)
    return (
        <div className="GraphiquesDuree">
            <LineChart
                width={258}
                height={263}
                data={userAverageSessions.sessions}
            >
                <XAxis axisLine={false} tickLine={false}  dataKey="day" />
                <YAxis  hide={false} />
                <Tooltip />
                <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" dot={false}/>
            </LineChart>
        </div>
    );
}

export default GraphiquesDuree;
