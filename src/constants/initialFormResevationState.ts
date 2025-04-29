import { inputType } from "../types/inputType";

const initialFormResevationState: Record<string, inputType> = {
  name: {
    value: "",
    placeholder: "Your Name",
    type: "text",
  },
  email: {
    value: "",
    placeholder: "Email Address",
    type: "email",
  },
  phone: {
    value: "",
    placeholder: "Phone",
    type: "text",
  },
  people: {
    value: "",
    placeholder: "Number of People",
    type: "select",
  },
  date: {
    value: "",
    placeholder: "Date",
    type: "date",
  },
  time: {
    value: "",
    placeholder: "Time",
    type: "select",
  },
  message: {
    value: "",
    placeholder: "Message",
    type: "text",
  },
};

const initialFormContactState: Record<string, inputType> = {
  name: {
    value: "",
    placeholder: "Your Name",
    type: "text",
  },
  email: {
    value: "",
    placeholder: "Email Address",
    type: "email",
  },
  phone: {
    value: "",
    placeholder: "Phone",
    type: "text",
  },
  subject: {
    value: "",
    placeholder: "Subjet",
    type: "text",
  },
  message: {
    value: "",
    placeholder: "Message",
    type: "text",
  },
};

export { initialFormResevationState, initialFormContactState };
