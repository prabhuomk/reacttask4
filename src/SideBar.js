import Button from "@material-ui/core/Button";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListIcon from "@material-ui/icons/List";
import CreateIcon from "@material-ui/icons/Create";
import EditIcon from "@material-ui/icons/Edit";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";

export function SideBar() {
  const history = useHistory();
  return (
    <div className="sidebar">
      <div className="list">
        <DashboardIcon />
        <Button onClick={() => history.push("/")} color="inherit">
          {" "}
          Dashboard
        </Button>
      </div>
      <br />
      <div className="list">
        <ListIcon />
        <Button onClick={() => history.push("/listusers")} color="inherit">
          List Users
        </Button>
      </div>
      <br />
      <div className="list">
        <CreateIcon />
        <Button onClick={() => history.push("/createusers")} color="inherit">
          Create Users
        </Button>
      </div>
    </div>
  );
}
