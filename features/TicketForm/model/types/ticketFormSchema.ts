import {Ticket} from "@/entities/Ticket";

export interface TicketFormSchema {
    form: {
        firstName: string;
        lastName: string;
        email: string;
        description: string;
        resolved: boolean;
    };
    ticket: Ticket | null;
    isLoading: boolean;
    error?: string;
}