import EventList from "../../components/events/event-list"
import { getAllEvents } from "../../dummy-data"
import EventSearch from "../../components/events/event-search"
import { useRouter } from "next/router"

export default function Events(){
    const events = getAllEvents()
    const router = useRouter()

    function findEventsHandler(year, month){
        const  fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }

    return <div>
        <EventSearch onSearch={findEventsHandler}/>
        <EventList items={events} />
    </div>
}