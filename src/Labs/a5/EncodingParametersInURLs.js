import React, { useState } from "react";
function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input
        onChange={(e) => setA(e.target.value)}
        className="form-control" type="number" value={a} />
      <input
        onChange={(e) => setB(e.target.value)}
        className="form-control" type="number" value={b} />
      <h3>Path Parameters</h3>
      <a
        href={`http://localhost:4000/a5/add/${a}/${b}`}
        className="btn btn-primary">
        Add {a} + {b}
      </a>
      <a
        href={`http://localhost:4000/a5/subtract/${a}/${b}`}
        className="btn btn-danger">
        Substract {a} - {b}
      </a>
      <h3>Query Parameters</h3>
      <a
        href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}
        className="btn btn-primary">
        Add {a} + {b}
      </a>
      <a
        href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}
        className="btn btn-danger">
        Substract {a} - {b}
      </a>

    </div>
  );
}
export default EncodingParametersInURLs;

