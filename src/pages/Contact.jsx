const Contact = () => {
  const register = () => {
    alert("thanks you for contacting");
  };
  const sendForm = (name) => {
    alert(`Thank you ${name}`);
  };
  return (
    <div>
      Contact
      <br />
      <button onClick={register}>Submit</button>
      <button onClick={() => sendForm("Lakim")}>Thank You</button>
      <input placeholder="Enter Your Name" id="name" />
      <button onClick={() => sendForm(document.getElementById("name").value)}>
        contact
      </button>
    </div>
  );
};

export default Contact;
