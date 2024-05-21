const Home = ({ data =[] }) => {
    return (
      <>
        <table>
          <tbody>
            {data.length > 0 ? (
              data.map((users, index) => (
                <tr key={index}>
                  <td>{users.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No data</td>
              </tr>
            )}
          </tbody>
        </table>
      </>
    );
  };
  
  export default Home;
  