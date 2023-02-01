import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IRedirect {
    to: string;
}

export default function Redirect({ to }: IRedirect) {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(to, { replace: true });
    });
    return null;
}