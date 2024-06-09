import MatchPage from "./_component/match-page";

export default function Page({ params }: { params: { match_id: string } }) {
    
    return(
        <>
        <MatchPage id={params.match_id}/>
        </>
    )
}