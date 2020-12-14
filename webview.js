const path = require("path");

const calculateTotalDirectMessages = () =>
  Array.from(document.getElementsByClassName("chats-list-element"))
    .map(el => Number(el.querySelector(".m-indicator .number").innerHTML))
    .filter(count => !isNaN(count))
    .reduce((curr, prev) => curr + prev, 0);

module.exports = Franz => {
  Franz.loop(() => Franz.setBadge(calculateTotalDirectMessages()));
  Franz.injectCSS(path.join(__dirname, "service.css"));
};
