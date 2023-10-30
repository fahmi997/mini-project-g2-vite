import { Tab, TabList, Tabs } from "@chakra-ui/react"
import Posisi from "./posisi"

const ContentDashProfile = () =>{
    return(
        <>
       <Posisi berada={"Informasi Dasar"}/>
       <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
        <Tabs width={"92%"} height={"40px"}>
            <TabList>
            <Tab
            _selected={{
                borderBottom:"2px solid rgb(226, 232, 240)"
            }}
              height={"50px"}
              color={"rgb(89, 89, 99)"}
              fontWeight={"600"}
              fontSize={"19px"}
              padding={"0px 4%"}
              bgColor={"white"}
              
            >
              Informasi Dasar
            </Tab>
            </TabList>
        </Tabs>
       </div>
        </>
    )
}

export default ContentDashProfile