import React, {useState, useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles'
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts';
// import logo from "../images/yaden.png"
const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch =  useDispatch();

  useEffect(() =>{
    dispatch( getPosts() );
  }, [dispatch])
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading}  variant="h1" align="center">
          Yadden
        </Typography >
        {/* <img src={logo} /> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="strech"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts  setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
