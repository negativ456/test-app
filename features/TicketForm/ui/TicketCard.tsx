"use client";
import React, {useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";
import EditIcon from "@/shared/assets/edit.svg";
import {useSelector} from "react-redux";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch";
import {fetchTicketById} from "@/features/TicketForm/service/fetchTicketById";
import {getTicket} from "@/features/TicketForm/model/selectors/selectors";

interface TicketCardProps {
    ticketId: string;
}

export const TicketCard = ({ ticketId }: TicketCardProps) => {
    const dispatch = useAppDispatch();
    const ticket = useSelector(getTicket)

    useEffect(() => {
        if (ticketId) {
            dispatch(fetchTicketById(ticketId));
        }
    }, [dispatch])

    if (!ticket) {
        return <div>No Ticket</div>
    }

    return (
        <div className="flex flex-col gap-4 relative">
            <div className="flex flex-col">
                <p className="text-gray-400 text-sm">First name</p>
                <p>{ticket.firstName}</p>
            </div>
            <div>
                <p className="text-gray-400 text-sm">Last name</p>
                <p>{ticket.lastName}</p>
            </div>
            <div>
                <p className="text-gray-400 text-sm">Description</p>
                <p>{ticket.description}</p>
            </div>
            <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p>{ticket.email}</p>
            </div>
            <div>
                <p className="text-gray-400 text-sm">Resolved</p>
                <p>{ticket.resolved ? "True" : "False"}</p>
            </div>
            <Link className="absolute right-4" href={`/update/${ticket._id}`}>
                <Image src={EditIcon} alt={"edit"}></Image>
            </Link>
        </div>
    );
};