import React, { useState, useEffect } from "react";

const Experiment9 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [apiData, setApiData] = useState("");
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!res.ok) {
          throw new Error("Network response error");
        }

        const data = await res.json();

        setApiData(data?.title || "No title found");
      } catch (err) {
        setApiError("Failed to fetch API data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      tempErrors.email = "Invalid email";
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Min 6 characters required";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess("Registration Successful!");
      setErrors({});
      setFormData({ name: "", email: "", password: "" });
    } else {
      setSuccess("");
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h2>Registration Form</h2>

      <p>
        <b>API Title:</b>{" "}
        {loading ? "Loading..." : apiError ? apiError : apiData}
      </p>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
        <br />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        {errors.email && (
          <small style={{ color: "red" }}>{errors.email}</small>
        )}
        <br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        {errors.password && (
          <small style={{ color: "red" }}>{errors.password}</small>
        )}
        <br />

        <button type="submit">Register</button>
      </form>

      {success && (
        <p style={{ color: "green", marginTop: "10px" }}>{success}</p>
      )}
    </div>
  );
};

export default Experiment9;