import {IconWarning} from "@/ui/organisms";
import "./messageDataNotAvailable.scss";
import {ReactElement} from "react";

interface IMessageDataNotAvailableProps {
    icon: ReactElement;
    message: string;
}
export default function MessageDataNotAvailable({ icon, message }: IMessageDataNotAvailableProps) {
    return (
        <div className="shopping-error">
            <span className="error-icon">
              {icon}
            </span>
            <p className="error-paragraph">
                {message}
            </p>
        </div>
    )
}