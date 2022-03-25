import { useParams } from "react-router-dom";
import { Event } from "../components/event/Event";

export function EventPage() {
    let { id } = useParams();

    return (
        <Event id={id} />
    );
}