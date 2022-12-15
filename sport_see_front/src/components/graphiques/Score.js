import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import ScoreLegend from "./ScoreLegend";
import "../../style/components/graphiques/Score.css"

function Score(props) {
    const infoUser = props.infoUser
    console.log(infoUser.score)
    const score = infoUser.score * 100 
    console.log(score)

    const data = [
        { name: 'acti', score: score ,x: 1, fill: 'red' },
    ];

    return (
        <div className="Score">
            
            <RadialBarChart width={250} height={250} data={data}
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
