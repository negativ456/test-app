import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Ticket, TicketSchema} from "@/entities/Ticket/model/types/types";

const initialState: TicketSchema = {
    tickets: [
        {
            firstName: "First",
            lastName: "Last",
            description: "decs",
            _id: "1",
            resolved: false,
            email: "mail@mail.com",
        }
    ],
};

export const ticketSlice = createSlice({
    name: "prompt",
    initialState,
    reducers: {
        setTickets: (state, action: PayloadAction<Ticket[]>) => {
            state.tickets = action.payload;
        },
        addTicket: (state, action: PayloadAction<Ticket>) => {
            state.tickets.push(action.payload);
        },
        updateTicket: (state, action: PayloadAction<Ticket>) => {
            state.tickets = state.tickets.map((prompt) =>
                prompt._id === action.payload._id ? action.payload : prompt
            );
        },
    },
});
export const { actions: ticketActions } = ticketSlice;
export const { reducer: ticketReducer } = ticketSlice;