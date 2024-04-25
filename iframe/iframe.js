const listener = (event) => {
  if (event.origin !== "http://localhost:4200") {
    return;
  }
  console.log("Mensaje recibido:", event.data);
};

window.addEventListener("message", listener);
