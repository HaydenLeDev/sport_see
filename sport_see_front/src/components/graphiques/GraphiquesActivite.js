//import '../../style/components/graphiques/GraphiquesActivite.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


function GraphiquesActivite(props) {

    const userPerformance = props.userPerformance
    for (var i = 0; i < userPerformance.data.length; i++) {
        switch (userPerformance.data[i].kind) {
            case 1:
                userPerformance.data[i].kind = "Cardio"
                break
            case 2:
                userPerformance.data[i].kind = "Energy"
                break
            case 3:
                userPerformance.data[i].kind = "Endurance"
                break
            case 4:
                userPerformance.data[i].kind = "Strength"
                break
            case 5:
                userPerformance.data[i].kind = "Speed"
                break
            case 6:
                userPerformance.data[i].kind = "Intensity"
                break
        }
    }
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
