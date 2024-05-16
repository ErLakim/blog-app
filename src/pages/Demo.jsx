const Demo =({isGoal=0})=>{
  let result;
  switch (true){
    case isGoal===0:
    result=<MissedGoal/>;
    break;
    case isGoal===1:
    result=<Goal/>;
    break;
    case isGoal===2:
    result=<Brace/>;
    break;
    case isGoal===3:
    result=<Hattrick/>;
    break;
    default:
    result=<>No Goal for him today</>;
  }
  return<>{result}</>
};
const Goal =()=>{
    return<> 1 Goal!! What an amazing goal by Mainoooo.
    </>;
};
const MissedGoal =()=>{
    return<> No Goal for him today
    </>;
};
const Brace=()=>{
    return<>He has got his brace today! Now he is on a Hattrick</>;
};

const Hattrick =()=>{
    return<> He scored 3 today!!!!! He is on fire
    </>;
};
export default Demo;
