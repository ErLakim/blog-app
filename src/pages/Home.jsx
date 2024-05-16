const Home =({data})=>{
    return<>
   <table>
    {data.length>0 ?(
        data.map({users,index} => {
            return <li key={index}>{users.name}</li>;
        })
    ):(<>No data</>)}
   </table>
    </>
};

export default Home;