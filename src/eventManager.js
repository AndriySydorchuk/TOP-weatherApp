const eventManager = (() => {
  function init() {
    handleUserInput();
  }

  function handleUserInput() {
    const userInputEl = document.getElementById("cityInput");

    userInputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        console.log(e.key);
      }
    });
  }

  return { init };
})();

export { eventManager };
