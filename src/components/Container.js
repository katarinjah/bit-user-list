import "./Container.css";
import { UserList } from "./UserList";

export const Container = () => {
    return (
        <div className="container-fluid text-center">
            <UserList />
        </div>
    );
}