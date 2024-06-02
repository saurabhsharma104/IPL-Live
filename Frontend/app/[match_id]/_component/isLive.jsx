import { Card } from "@/components/ui/card"

const IsMatchLive=({data})=>{
    if (!data?.scoreCard) return null;

    const team1 = data?.matchHeader.team1  
    const team2 = data?.matchHeader.team2

    const TeamScore = ({ team }) => (
        <div className="flex gap-10">
            <div className="flex items-center">
                <p>{team.shortName}</p>
            </div>
        </div>
    );

    return(
        <>
        <div className="container p-1 max-w-2xl mt-1">
            <Card className="mt-2">
                <div className="flex justify-between p-5">
                    <div>IPL</div>
                </div>
                <div className="p-5">
                <div className="grid grid-cols-2 place-items-center">
                    <TeamScore team={team1}/>
                    <TeamScore team={team2}/>
                </div>
                {
                    data?.matchHeader?.state=="Preview" &&
                    <>
                    <p className="text-center">{data.matchHeader?.matchDescription}</p>
                    <p className="text-center text-xs mt-2">{data?.matchHeader?.status}</p>
                    </> 
                }
                </div>
                
            </Card>
        </div>
        </>
    )
}

export default IsMatchLive