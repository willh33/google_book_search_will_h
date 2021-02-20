
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import { Container, Row, Col } from "./components/Grid";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Container>
          <Row>
            <Col size="md-12">
              <h2 className='text-center fw-bolder'>(React) Google Books Search</h2>
              <h4 className='text-center text-muted'>Search for and Save Books of Interest</h4>
            </Col>
          </Row>
          <Row>
            <Switch>
              <Route exact path={['/', "/search"]}>
                <SearchBooks />
              </Route>
              <Route exact path="/saved">
                <SavedBooks />
              </Route>
              <Route>
                <NoMatch />
              </Route>
            </Switch>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
