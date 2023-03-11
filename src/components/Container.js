import "./Container.css";
import { UserGrid } from "./UserGrid";

export const Container = () => {
    return (
        <div className="container-fluid">
            <UserGrid />
        </div>
    );
}