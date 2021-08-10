import { useState } from "react";
import submitAuth from "../handlers/form";

export default function useForm(toggleForms, dispatch) {
  const [responses, setResponses] = useState("");

  return {
    responses,
    submitAuth: (e) => submitAuth(e, toggleForms, setResponses, dispatch),
  };
}
