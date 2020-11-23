import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import { COLORS, ROUTES } from "./shared";
import Header from "./shared/components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <Router>
      <MainContainer>
        <Header />
        <Switch>
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.CART} component={Cart} />
          <Route path={ROUTES.THANKS} component={Thanks} />
          <Redirect to={ROUTES.HOME} />
        </Switch>
      </MainContainer>
    </Router>
  );
}

const MainContainer = styled.div`
  background-color: ${COLORS.backgroundGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

export default App;
