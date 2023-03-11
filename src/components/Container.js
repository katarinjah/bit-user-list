import "./Container.css";
import { UserList } from "./UserList";

export const Container = () => {
    return (
        <div className="container-fluid">
            <UserList/>
        </div>
    );
}