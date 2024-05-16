import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Demo from "./pages/Demo";

const App = () => {
  const users=[{name:"ram"},{name:"sita"}];
return(<><Contact title="Contact Us" description="THis is contact us page."/>
<Home date={users}/>
<AboutUs/>
<Login/>
<br/>
<SignUp/>
<br />
<Demo isGoal={2} />
 </>);

 };

export default App;
