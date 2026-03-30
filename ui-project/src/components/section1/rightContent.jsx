import RightCard from "./rightCard";
function RightContent(props){
    return(
        <div className="h-full w-2/3 p-4 flex flex-nowrap overflow-x-auto gap-3" id="rightContent">
            {/* <RightCard/>
            <RightCard/>
            <RightCard/>
            <RightCard/>
            <RightCard/> */}
            {
                props.users.map(function(elem,idx){
                    return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
                })
            }
        </div>
    )
}

export default RightContent;