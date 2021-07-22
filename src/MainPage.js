import Card from "@material-ui/core/Card";

export function MainPage() {
  return (
    <div className="mainpage">
      <Card className="card">
        <h2>Total users</h2>
        <br />
        <h3>10 users</h3>
      </Card>
      <Card className="card">
        <h2>Monthly Income</h2>
        <br />
        <h3>10 crore</h3>
      </Card>
      <Card className="card">
        <h2>Annual Income</h2>
        <br />
        <h3>100 crore</h3>
      </Card>
      <Card className="card">
        <h2>Task Completed</h2>
        <br />
        <h3>80% completed</h3>
      </Card>
      <Card className="card">
        <h2>Task Pending</h2>
        <br />
        <h3>20% left</h3>
      </Card>
      <Card className="card">
        <h2>Reports of user</h2>
        <br />
        <h3>5 users</h3>
      </Card>
      <Card className="card">
        <h2>Rating</h2>
        <br />
        <h3>4 Star</h3>
      </Card>
    </div>
  );
}
