import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/Preferences/userList/UserList";
import User from "./pages/Preferences/user/User";
import NewUser from "./pages/Preferences/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import AboutUs from "./pages/pages/AboutUs";
import IssueList from "./pages/Issues/IssueList";
import NewIssue from "./pages/Issues/newIssue";
import EditIssue from "./pages/Issues/EditIssue";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Dashboard />
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route path="/users">
            {/* <NewUser /> */}
            <UserList />
            <Route path="/aboutUs">
              {/* <NewUser /> */}
              <AboutUs />
            </Route>
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/issuelist">
            <IssueList />
          </Route>
          <Route path="/editissue/:productid">
            <EditIssue />
          </Route>
          <Route path="/newissue">
            <NewIssue />
          </Route>          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
