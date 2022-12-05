import '../../style/components/graphiques/Graphiques.css';
import {
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
} from 'recharts';


function GraphUserActivity(props) {

    const sessionUser = props.sessionUser
    console.log(sessionUser)
    return (
        <BarChart
            width={700}
            height={300}
            data={sessionUser}
        >
            <XAxis />
            <YAxis orientation="right"/>
            <Tooltip />
            <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} barSize={7} />
            <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} barSize={7} />
        </BarChart>
    );
}

export default GraphUserActivity;
