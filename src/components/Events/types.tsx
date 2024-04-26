export type EventDate = {
    startDate: Date;
    endDate: Date;
}

export interface EventItem {
    title: string;
    date: EventDate;
    linkURL: string;
    linkText: string;
}

//event props
export interface EventCardProps {
    title: string;
    date: EventDate;
    linkURL: string;
    linkText: string;
}
