import React from "react";
import TaskInput from "../../components/TaskInput";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";
import TaskList from "../../components/TaskList";
import Filters from "./Filters";
import Searchbar from "./Searchbar";
export class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <Searchbar />
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12} lg={4} sm={6}>
            <Typography align="center" variant="h1" >
              TAREFAS
            </Typography>
          </Grid>
          <Grid container justify="center" item xs={12} sm={6} lg={4}>
            <TaskInput />
          </Grid>
          <Grid item xs={12} lg={4} sm={6} container justify="center">
            <Filters />
          </Grid>
          <Grid container item xs={12} sm={6} lg={4}>
            <TaskList />
          </Grid>
        </Grid>
      </div>
    );
  }
}
