import "./Container.css";
import { UserGrid } from "./UserGrid";
// import { UserList } from "./UserList";

export const Container = () => {
    return (
        <div className="container-fluid">
            <UserGrid />
            {/* <UserList /> */}
        </div>
    );
}