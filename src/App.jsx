import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Homework from "./pages/Homework";
import UseEff from "./pages/UseEff";
import Demo from "./pages/Demo";
import Button from "./components/Button";
import Timer from "./pages/Timer";
import SearchWithEff from "./pages/SearchWithEff";
import FilterWithEff from "./pages/FilterWithEff";
const App = () => {
  const users=[{name:"ram"},{name:"sita"}];
return(<><Contact title="Contact Us" description="THis is contact us page."/>
<Home data={users}/>
<AboutUs/>
<br/>
{/* <Timer/>
<br/>
<Login/>
<br/>
<SignUp/> */}
<br />
{/* <Homework/> */}
{/* <UseEff/>
<Demo  />
<Button/> */}
<FilterWithEff/>
<br/>
<SearchWithEff/>
 </>);

 };

export default App;
