import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const validate = () => {
    let err = {};

    if (!name.trim()) err.name = "Name is required";
    if (!email.trim()) err.email = "Email is required";
    if (!password.trim()) err.password = "Password is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const newUser = {
        id: Date.now(),
        name,
        email,
      };

      setUsers([newUser, ...users]);
      setSuccess("Registration Successful!");

      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f2f2f2;
          }

          * {
            box-sizing: border-box;
          }

          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
          }

          .form-box {
            background: white;
            padding: 30px;
            border-radius: 10px;
            width: 450px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            text-align: center;
          }

          input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          button {
            background: green;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 120px;
          }

          button:hover {
            background: darkgreen;
          }

          .error {
            color: red;
            font-size: 12px;
            text-align: left;
            margin: 0;
          }

          .success {
            color: green;
            margin-top: 10px;
          }

          .users {
            margin-top: 15px;
            background: #e8f5e9;
            padding: 10px;
            border-radius: 5px;
            text-align: left;
            max-height: 250px;
            overflow-y: auto;
          }

          .users h3 {
            margin-bottom: 10px;
          }

          .users ul {
            padding-left: 20px;
          }

          .users li {
            margin-bottom: 5px;
          }
        `}
      </style>

      <div className="container">
        <div className="form-box">
          <h2>Registration Form</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <button type="submit">Register</button>
          </form>

          {success && <p className="success">{success}</p>}

          <div className="users">
            <h3>Registered Users</h3>
            <ul>
              {users.map((user) => (
                <li key={user.id || user.email}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;