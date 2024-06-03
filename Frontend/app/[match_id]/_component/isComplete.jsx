import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoveLeft, MoveRight } from "lucide-react";
import { memo } from "react";

const IsMatchComplete = ({ data }) => {
  if (!data?.scoreCard) return null;
  if(data?.scoreCard.lenght==0) return null

  const [team1, team2] = data?.scoreCard;

  const TeamScore = memo(({ team }) => (
    <div className="flex gap-10">
      <div className="flex items-center">
        <p>{team?.batTeamDetails?.batTeamShortName}</p>
      </div>
      <div>
        <p>{team?.scoreDetails?.runs}/{team?.scoreDetails?.wickets}</p>
        <p>({team?.scoreDetails?.overs})</p>
      </div>
    </div>
  ))

  TeamScore.displayName = TeamScore

  const ExtrasRow = ({ extras }) => (
    <TableRow>
      <TableCell className="text-lg font-semibold">Extra</TableCell>
      <TableCell colSpan={5}>
        <div>
          {extras.total !== "" && <span>{extras.total}</span>}
          ({extras.wides !== "" && <span>W {extras.wides}</span>},
          {extras.legByes !== "" && <span>LB {extras.legByes}</span>},
          {extras.noBalls !== "" && <span>NB {extras.noBalls}</span>},
          {extras.byes !== "" && <span>B {extras.byes}</span>})
        </div>
      </TableCell>
    </TableRow>
  );

  const TotalRunsRow = ({ scoreDetails }) => (
    <TableRow>
      <TableCell className="text-lg font-semibold">Total Runs</TableCell>
      <TableCell colSpan={5}>
        <div>
          {scoreDetails.runs}
          ({`${scoreDetails.wickets} Wkts`}, {`${scoreDetails.overs} ov`})
        </div>
      </TableCell>
    </TableRow>
  );

  const BatsmanRow = ({ batsman }) => {
    if (batsman.balls === 0 && batsman.runs === 0) return null;

    return (
      <TableRow key={batsman.batName}>
        <TableCell>
          <div className="font-medium flex items-center gap-1">
            {batsman.batName}
            {batsman.isCaptain && "(C)"}
            {batsman.isKeeper && "(Wk)"}
            {batsman.inMatchChange === "MOUT" && <MoveRight className="text-green-500 h-3 w-3" />}
            {batsman.inMatchChange === "MIN" && <MoveLeft className="h-3 w-3" color="red" />}
          </div>
          <p className="text-xs">{batsman.outDesc}</p>
        </TableCell>
        <TableCell><div className="font-medium">{batsman.runs}</div></TableCell>
        <TableCell>{batsman.balls}</TableCell>
        <TableCell>{batsman.fours}</TableCell>
        <TableCell>{batsman.sixes}</TableCell>
        <TableCell>{batsman.strikeRate}</TableCell>
      </TableRow>
    );
  };

  const BowlermanRow = ({ bowl }) => {
    return (
      <TableRow key={bowl.bowlName}>
        <TableCell>
          <div className="font-medium flex items-center gap-1 w-72">
            {bowl.bowlName}
            {bowl.isCaptain && "(C)"}
            {bowl.isKeeper && "(Wk)"}
            {bowl.inMatchChange === "MOUT" && <MoveRight className="text-green-500 h-3 w-3" />}
            {bowl.inMatchChange === "MIN" && <MoveLeft className="h-3 w-3" color="red" />}
          </div>
          <p className="text-xs">{bowl.outDesc}</p>
        </TableCell>
        <TableCell><div className="font-medium">{bowl.overs.toFixed(2)}</div></TableCell>
        <TableCell>{bowl.maidens}</TableCell>
        <TableCell>{bowl.runs}</TableCell>
        <TableCell>{bowl.wickets}</TableCell>
        <TableCell>{bowl.economy.toFixed(2)}</TableCell>
      </TableRow>
    );
  };

  const renderTableContent = (team) => (
    <Table style={{ background: "white" }}>
      <TableHeader>
        <TableRow>
          <TableHead>Batting</TableHead>
          <TableHead>R</TableHead>
          <TableHead>B</TableHead>
          <TableHead>4s</TableHead>
          <TableHead>6s</TableHead>
          <TableHead>S/R</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.values(team?.batTeamDetails?.batsmenData).map((batsman) => (
          <BatsmanRow key={batsman?.batName} batsman={batsman} />
        ))}
        <ExtrasRow extras={team?.extrasData} />
        <TotalRunsRow scoreDetails={team?.scoreDetails} />
      </TableBody>
    </Table>
  );

  const Info=()=>{
    return(
      <div className="p-2" style={{background:"white"}}>
        <Card className="rounded-md">
          <CardHeader className="p-4">
            <CardTitle className="text-sm">Key</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 items-center">
              <div><MoveRight className="text-green-500 h-3 w-3" /></div>
              <div className="text-xs">Substituted In</div>
            </div>

            <div className="flex gap-2 items-center">
              <div><MoveLeft className="h-3 w-3" color="red" /></div>
              <div className="text-xs">Substituted Out</div>
            </div>

            <div className="flex gap-2 items-center">
              <div className="text-xs">IP</div>
              <div className="text-xs">Impact player</div>
            </div>

            <div className="flex gap-2 items-center">
              <div className="text-xs">C</div>
              <div className="text-xs">Captain</div>
            </div>

            <div className="flex gap-2 items-center">
              <div className="text-xs">WK</div>
              <div className="text-xs">Wicket-keeper</div>
            </div>
          </CardContent>
        </Card>
        <div className="flex items-center gap-2 mt-4">
          <div className="text-sm text-green-500">
            TOSS:
          </div>
          <div className="text-sm">
            {`${data?.matchHeader?.tossResults?.tossWinnerName} Won The Toss decided to ${data?.matchHeader?.tossResults?.decision} First.`}
          </div>
        </div>
    </div>
    )
  }

  const renderbowlTableContent = (team) => (
    <Table className="mt-5" style={{ background: "white",}}>
      <TableHeader>
        <TableRow>
          <TableHead >Bowling</TableHead>
          <TableHead >O</TableHead>
          <TableHead >M</TableHead>
          <TableHead >R</TableHead>
          <TableHead >W</TableHead>
          <TableHead >Ecom</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.values(team?.bowlTeamDetails?.bowlersData).map((bowl) => (
          <BowlermanRow key={bowl?.bowlName} bowl={bowl} />
        ))}
      </TableBody>
    </Table>
  );

  return (
    <div className="container p-1 max-w-2xl mt-1">
      <Card className="mt-5 mb-5">
        <div className="flex justify-between p-5">
          <div>IPL</div>
        </div>
        <div className="p-5 mt-3">
          <div className="grid grid-cols-2 place-items-center justify-items-center">
            <TeamScore team={team1} />
            <TeamScore team={team2} />
          </div>
          <p className="text-center text-xs mt-5">
            {data.status}
          </p>
        </div>
        <Separator />
      </Card>

      <Tabs defaultValue="team1" className="w-full rounded-none">
        <TabsList className="grid w-full grid-cols-2 rounded-none">
          <TabsTrigger value="team1">{team1?.batTeamDetails?.batTeamName}</TabsTrigger>
          <TabsTrigger value="team2">{team2?.batTeamDetails?.batTeamName}</TabsTrigger>
        </TabsList>
        <TabsContent value="team1">
          {renderTableContent(team1)}
          <Separator/>
          {renderbowlTableContent(team1)}
          <Separator/>
        <Info/>


        </TabsContent>
        <TabsContent value="team2">
          {renderTableContent(team2)}
          <Separator/>
          {renderbowlTableContent(team2)}
          <Separator/>
          <Info/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IsMatchComplete;


