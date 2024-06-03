import TeamDash from "@/app/team/_component/TeamDashboard"


const Page=({params})=>{
    return(
        <div className="container p-1 max-w-2xl mt-1 h-full">
            <TeamDash name={params.team_name}/>
        </div>
    )
}

export default Page