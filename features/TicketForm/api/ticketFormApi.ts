import { rtkApi } from "@/shared/api/rtkApi";
import {Ticket} from "@/entities/Ticket";

interface CreateTicketArgs {
    firstName: string,
    lastName: string,
    email: string,
    description: string,
    resolved: boolean,
}

interface UpdateTicketArgs extends Partial<CreateTicketArgs>{
    _id: string;
}

const ticketFormApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        updateTicket: build.mutation<Ticket, UpdateTicketArgs>({
            query: (ticket) => ({
                url: `edit-task/${ticket._id}`,
                method: "PUT",
                body: ticket,
            }),
            invalidatesTags: ["Ticket"],
        }),
        createTicket: build.mutation<Ticket, CreateTicketArgs>({
            query: (ticket) => ({
                url: "new",
                method: "POST",
                body: ticket,
            }),
            invalidatesTags: ["Ticket"],
        }),
    }),
});

export const useUpdateTicket = ticketFormApi.useUpdateTicketMutation;
export const useCreateTicket = ticketFormApi.useCreateTicketMutation;