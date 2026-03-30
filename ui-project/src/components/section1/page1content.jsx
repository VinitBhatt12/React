import LeftContent from "./leftContent";
import RightContent from "./rightContent";
function Page1Content(props){
    return(
        <div className="py-7 px-18 h-[90vh] items-center gap-3 flex">
            <LeftContent/>
            <RightContent users={props.users}/>
        </div>
    )
}

export default Page1Content;