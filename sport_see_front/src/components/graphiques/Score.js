import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import ScoreLegend from "./ScoreLegend";
import "../../style/components/graphiques/Score.css"

function Score(props) {
    const infoUser = props.infoUser
    var score = infoUser.score * 100 
    if (isNaN(score)){
        var score = infoUser.todayScore * 100
    }
    
    const data = [
        { name: 'acti', score: score ,x: 1, fill: 'red' },
    ];

    return (
        <div className="Score">
            <h2 className="Score-titre">Score</h2>
            <RadialBarChart width={200} height={200} data={data}
                innerRadius={150}
                barSize={10}
                startAngle={90}
                endAngle={90 + 360}>
                <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    angleAxisId={0}
                    tick={false}
                />
                <RadialBar
                    dataKey="score"
                    cornerRadius={5}
                />
            </RadialBarChart>
            <ScoreLegend score={score}/>
        </div>
    );
}

export default Score;
