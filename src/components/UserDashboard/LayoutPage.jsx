import SideNav from "./SideNav"

const LayoutPageDashboard = (props) =>{
    return(<>
    <SideNav/>
    {props.children}
    </>

    )
}

export default LayoutPageDashboard