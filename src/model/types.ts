import DatePicker from "react-datepicker";

export type PostAccount = {
    id:number;
    title: string;
    status?: string;
    myDate: Date | null;
    content:string;
}