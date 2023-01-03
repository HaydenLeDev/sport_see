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
    let average = 0
    for (var i = 0; i < userAverageSessions.sessions.length; i++) {
        switch (userAverageSessions.sessions[i].day) {
            case 1:
                userAverageSessions.sessions[i].day = "L"
                break
            case 2:
                userAverageSessions.sessions[i].day = "M"
                break
            case 3:
                userAverageSessions.sessions[i].day = "M"
                break
            case 4:
                userAverageSessions.sessions[i].day = "J"
                break
            case 5:
                userAverageSessions.sessions[i].day = "V"
                break
            case 6:
                userAverageSessions.sessions[i].day = "S"
                break
            case 7:
                userAverageSessions.sessions[i].day = "D"
                break
        }
    }
    const handleMouseMove = (event) => {
        console.log(event)
        if (event.isTooltipActive){
            const { chartX, chartY } = event;
            document.getElementById("GraphiquesDuree-background").style.left = chartX + "px"
            document.getElementById("GraphiquesDuree-background").style.width = "100%"
        } else {
            document.getElementById("GraphiquesDuree-background").style.width = "0%"

        }
        
        //console.log(chartX)
      };

    const positionActiveDotX = (event) =>{
        console.log(event)
    }
    //calcule de la moyenne
    for(let i = 0 ; i < userAverageSessions.sessions.length ; i++){
        average += userAverageSessions.sessions[i].sessionLength
        userAverageSessions.sessions[i].sessionLength = average
    }
    for(let i = 0 ; i < userAverageSessions.sessions.length ; i++){
        userAverageSessions.sessions[i].sessionLength = Math.floor(userAverageSessions.sessions[i].sessionLength / (i+1))
    }

    return (
        <div className="GraphiquesDuree">
            <h2 className="GraphiquesDuree-titre">Durée moyenne des <br></br> sessions</h2>
            <div id="GraphiquesDuree-background"></div>
            <ResponsiveContainer width="100%" height={263} className="GraphiquesDuree-graph">
            <LineChart
                data={userAverageSessions.sessions}
                onMouseMove={handleMouseMove}
                width="100%"    
                padding={{ left: 0, right: 0  }}
            >
                <YAxis 
                    hide="false" 
                    domain={['dataMin - 5' , 'dataMax + 12']}
                />
                <XAxis 
                    axisLine={false} 
                    tickLine={false}  
                    dataKey="day" 
                    stroke="#FFFFFF67" 
                    
                />
                <Tooltip 
                    content={<TooltipCustomDuree />} 
                    cursor={false} 
                />
                <Line  
                    type="natural"  
                    dataKey="sessionLength" 
                    stroke="#FFFFFF67" 
                    strokeWidth={2} 
                    dot={false} 
                    activeDot={{
                        id: "test",
                        stroke: 'rgba(255, 255, 255, 0.6)',
                        r:4 , 
                        strokeWidth: 8 }}    
                />

            </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default GraphiquesDuree;
