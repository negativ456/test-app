import React from 'react';
import {TicketCard} from "@/features/TicketForm";

type tParams = Promise<{ id: string }>;

const Page = async (props: { params: tParams }) => {
    const { id } = await props.params;


    return (
        <div>
            <TicketCard ticketId={id}/>
        </div>
    );
};

export default Page;