//import '../../style/components/graphiques/GraphiquesActivite.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


function GraphiquesActivite(props) {

    const userPerformance = props.userPerformance

    return (
        <div className="GraphiquesActivite">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={userPerformance.data} outerRadius={72} cx='50%' cy='50%'>
                    <PolarGrid  radialLines={false} />
                    <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" tickLine={false} tick={{ fontSize: 12 }}/>
                    <Radar dataKey="value" stroke="none" fill="#FF0101B2" fillOpacity={0.7}  />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default GraphiquesActivite;
