//import '../../style/components/graphiques/GraphiquesActivite.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


function GraphiquesActivite(props) {

    const userPerformance = props.userPerformance

    return (
        <div className="GraphiquesActivite">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" data={userPerformance.data} fill="#FFFFFF" stroke="#FFFFFF">
                    <PolarGrid stroke="#FFFFFF" radialLines="none"/>
                    <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" fill="#FF0101B2" tickLine={false}/>
                    <Radar dataKey="value" stroke="none" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default GraphiquesActivite;
