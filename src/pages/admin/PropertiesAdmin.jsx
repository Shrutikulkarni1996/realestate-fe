import React, { useEffect, useState } from "react";
import axios from "axios";

function PropertiesAdmin() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/properties")
      .then((res) => setProperties(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>All Properties</h2>

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>City</th>
            <th>Price</th>
            <th>Owner ID</th>
          </tr>
        </thead>

        <tbody>
          {properties.map((p) => (
            <tr key={p.propertyId}>
              <td>{p.propertyId}</td>
              <td>{p.title}</td>
              <td>{p.city}</td>
              <td>₹{p.price}</td>
              <td>{p.ownerId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropertiesAdmin;
