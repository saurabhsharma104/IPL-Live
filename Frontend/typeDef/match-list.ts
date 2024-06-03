// export type VenueInfo = {
//     id: number;
//     ground: string;
//     city: string;
//     timezone: string;
// };

// type team1={
//     teamId: number,
//     teamName: string,
//     teamSName: string,
//     imageId: number
// }

// type team2={
//     teamId: number,
//     teamName: string,
//     teamSName: string,
//     imageId: number
// }

// type MatchInfo = {
//     matchId: number,
//     seriesId: number,
//     seriesName: string,
//     matchDesc: string,
//     matchFormat: string,
//     startDate: string,
//     endDate: string,
//     state: string,
//     status: string,
//     team1: team1,
//     team2: team2,
//     venueInfo: VenueInfo,
//     currBatTeamId: number,
//     seriesStartDt: string,
//     seriesEndDt: string,
//     isTimeAnnounced: boolean
// };

// type team1Score={
//     inngs1: {
//         inningsId: number,
//         runs: number,
//         wickets: number,
//         overs: number
//     }
// }

// type team2Score={
//     inngs1: {
//         inningsId: number,
//         runs: number,
//         wickets: number,
//         overs: number
//     }
// }

// type matchScore={
//     team1Score:team1Score,
//     team2Score:team2Score
// }
  
// type Match = {
//     matchInfo: MatchInfo;
// };
  
// type MatchDetailsMap = {
//     key: string;
//     match: Match[];
//     seriesId: number;
// };

// type MatchData = {
//     matchDetailsMap?: MatchDetailsMap;
//     adDetail?: {
//       name: string;
//       layout: string;
//       position: number;
//     };
// };
  

export type MatchDetails = {
    matchDetailsMap: {
        key: string;
        match: Match[];
        seriesId: number;
    };
};

type Match = {
    matchInfo: MatchInfo;
    matchScore: MatchScore;
};

type MatchInfo = {
    matchId: number;
    seriesId: number;
    seriesName: string;
    matchDesc: string;
    matchFormat: string;
    startDate: number;
    endDate: number;
    state: string;
    status: string;
    team1: Team;
    team2: Team;
    venueInfo: VenueInfo;
    currBatTeamId: number;
    seriesStartDt: number;
    seriesEndDt: number;
    isTimeAnnounced: boolean;
};

type Team = {
    teamId: number;
    teamName: string;
    teamSName: string;
    imageId: number;
};

type VenueInfo = {
    id: number;
    ground: string;
    city: string;
    timezone: string;
};

type MatchScore = {
    team1Score: Innings;
    team2Score: Innings;
};

type Innings = {
    inngs1: InningDetails;
};

type InningDetails = {
    inningsId: number;
    runs: number;
    wickets: number;
    overs: number;
};