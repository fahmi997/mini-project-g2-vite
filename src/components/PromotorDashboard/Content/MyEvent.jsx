import { Button, Wrap, WrapItem } from "@chakra-ui/react";
import EventCard from "./EventCard";
import API_CALL from "../../../helper";
import { useEffect, useState } from "react";

const MyEvent = () => {
    const [res, setRes] = useState(null);
    const [events, setEvents] = useState(null);

    useEffect(() => {
        getEvents();
        // console.log("Bool Response:", Boolean(res));
        // console.log("Response:", res);
        // if(res){
        // }
    }, [])

    useEffect(() => {
        handleData()
    }, [res])

    const getEvents = async () => {
        try {
            // const response = await API_CALL.get(`/event/all/${userId}`)
            const response = await API_CALL.get('/event/all/3')
            setRes(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleData = () => {
        console.log(res);
        if (res) {
            const result = res.map((event) => {
                const data = {};

                const startDate = event.startDate.substring(0, 10);
                const endDate = event.endDate.substring(0, 10);
                const startTime = event.startDate.substring(11, 16);
                const endTime = event.endDate.substring(11, 16);

                data.id = event.id;
                data.name = event.name;
                data.category = event.category.name;
                data.date = `${startDate} - ${endDate}`;
                data.time = `${startTime} - ${endTime}`;
                data.image = event.image;
                
                if (event.method === "online") {
                    data.location = event.url;
                }
                if (event.method === "offline") {
                    data.location = `${event.venue}, ${event.city.province.name}`;
                }
                return data;
            });
            setEvents(result);
        }
    }

    const onDelete = async (id) =>{
        await API_CALL.delete(`/event/delete/${id}`)
        getEvents()
    }

    const printEventCard = () => {
        // console.log(Boolean(events));
        if(events){
            return events.map((val, index) => {
                return <>
                    <WrapItem key={index}>
                        <EventCard name={val.name} category={val.category} date={val.date} time={val.time} location={val.location} image={val.image} onDelete={() => onDelete(val.id)}/>
                    </WrapItem>
                </>
            })
        }
    }

    return <>
        {/* <Button onClick={tes}>TES</Button> */}
        <Wrap p={'25px'}justify={'normal'} spacing={'25px'} >
            {/* <WrapItem>
                <EventCard name={'tes'}/>
            </WrapItem> */}
            {printEventCard()}
        </Wrap>
    </>
}

export default MyEvent;