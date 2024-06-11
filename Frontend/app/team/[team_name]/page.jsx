import TeamDash from "@/app/team/_component/TeamDashboard"


const Page=({params})=>{
    return(
        <div className="">
            <TeamDash name={params.team_name}/>
        </div>
    )
}

export default Page