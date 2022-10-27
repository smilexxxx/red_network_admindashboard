import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import FeedbackList from "./pages/feedback/feedbackList";
import Feedback from "./pages/feedback/feedback";
import { useSelector } from "react-redux";

function App() {
  //const admin = useSelector((state) => state.user.currentUser.isAdmin);
  const admin = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {admin && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
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
              <Route path="/feedbacks">
                <FeedbackList />
              </Route>
              <Route path="/feedback/:feedbackId">
                <Feedback />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
