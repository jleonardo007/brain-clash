const EventEmitter = require("events");
const emitter = new EventEmitter();
const userEvents = require("./userEvents");

function loadSubscribers() {
  userEvents(emitter);
  console.log("Subscribers loaded successfully");
}

module.exports = {
  emitter,
  loadSubscribers,
};
