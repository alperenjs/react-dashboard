import { Grid } from "@mui/material";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import CustomTable from "../../components/table/CustomTable";
import Widget from "../../components/widget/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Grid container justifyContent="center" spacing={2} columns={16}>
            <Grid item lg={4} md={6} xs={12}>
              <Widget type="user" />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Widget type="order" />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Widget type="earning" />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Widget type="balance" />
            </Grid>
          </Grid>
        </div>

        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <CustomTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
