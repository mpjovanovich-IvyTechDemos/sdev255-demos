import express from "express";

const app = express();
const PORT = 3000;

/*
CALCULATOR APP
--------------------------------------------------

All endpoints expect a querystring in the format:
  ?a=1&b=2

Three is a lot of repetition in the code. We should refactor this later, but for
now we will leave it as is.
*/

// Since we need this functionality in multiple places, we have extracted it
// into a separate function. This function takes a single string parameter and
// returns an object with two properties:
//   - error: a string error message if the parameter is missing or invalid
//   - value: the float value of the parameter if it is valid
function getFloatParameter(param) {
  let value = null;
  let error = null;
  if (!param) {
    return "Error: Missing parameter";
  }

  value = parseFloat(param);
  if (isNaN(value)) {
    error = "Error: Invalid parameter";
  }

  return { error };
}

app.get("/add", (req, res) => {
  const a = getFloatParameter(req.query.a);
  if (a.error) {
    // If there is an error, send the error message and return.
    // We cannot continue.
    res.send(a.error);
    return;
  }

  const b = getFloatParameter(req.query.b);
  if (b.error) {
    // If there is an error, send the error message and return.
    // We cannot continue.
    res.send(b.error);
    return;
  }

  // If we made it here, we have valid parameters stored in the "value" property
  // of the objects. We can calculate the result and send the response.
  const result = a.value + b.value;
  res.send(`${a.value} + ${b.value} = ${result}`);
});

app.get("/subtract", (req, res) => {
  const a = getFloatParameter(req.query.a);
  if (a.error) {
    res.send(a.error);
    return;
  }

  const b = getFloatParameter(req.query.b);
  if (b.error) {
    res.send(b.error);
    return;
  }

  const result = a.value - b.value;
  res.send(`${a.value} - ${b.value} = ${result}`);
});

app.get("/multiply", (req, res) => {
  const a = getFloatParameter(req.query.a);
  if (a.error) {
    res.send(a.error);
    return;
  }

  const b = getFloatParameter(req.query.b);
  if (b.error) {
    res.send(b.error);
    return;
  }

  const result = a.value * b.value;
  res.send(`${a.value} * ${b.value} = ${result}`);
});

app.get("/divide", (req, res) => {
  const a = getFloatParameter(req.query.a);
  if (a.error) {
    res.send(a.error);
    return;
  }

  const b = getFloatParameter(req.query.b);
  if (b.error) {
    res.send(b.error);
    return;
  }

  const result = a.value * b.value;
  res.send(`${a.value} * ${b.value} = ${result}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
