import state from "../state.js";

export function init() {
  const connection = new WebSocket(state.socketURL);

  connection.addEventListener("message", function (data) {
    /**
     * @type {{ type: 'Error'|'Login'|'Weather'|'Stocks'|'Calendar'|'News'|'Books'|'Chat'|'Shopping', data: any }}
     */
    const parsedData = JSON.parse(data.data);

    if (parsedData.type === "Login") {
      handleLoginResponse(parsedData.data);
      return;
    }

    if (parsedData.type === "Weather") {
      handleWeatherResponse(parsedData.data);
      return;
    }

    if (parsedData.type === "Stocks") {
      handleStockResponse(parsedData.data);
      return;
    }

    if (parsedData.type === "Calendar") {
      handleCalendarResponse(parsedData.data);
      return;
    }

    if (parsedData.type === "Chat") {
      handleChatResponse(parsedData.data);
      return;
    }

    if (parsedData.type === "News") {
      handleNewsResponse(parsedData.data);
      return;
    }

    if (parsedData.type === "Shopping") {
      handleShoppingListResponse(parsedData.data);
      return;
    }

    console.log(parsedData);
  });

  return {
    sendLoginRequest: sendLoginRequest.bind(connection),
    sendCalendarRequest: sendCalendarRequest.bind(connection),
    sendChatMessage: sendChatMessage.bind(connection),
    sendShoppingListRequest: sendShoppingListRequest.bind(connection),
    connection,
  };
}

/**
 * @param {{ error?: string, success: boolean, data: { layout: any, name: string } }}
 */
function handleLoginResponse({ error, success, data }) {
  if (error && error.length > 0) {
    // Do error handling!
    console.error(error, data);

    return;
  }

  if (success) {
    // We logged in!

    state.layout = data.layout;
    state.user = data.name;
  }
}

/**
 * @param {{ weather: any, main: any }}
 */
function handleWeatherResponse({ weather, main }) {
  state.components.weather = { weather, main };
}

/**
 * @param {{ date: string, items: Array<{ type: number, symbol: string, oldValue: number, value: number, high: number, low: number }> }}
 */
function handleStockResponse({ date, items }) {
  state.components.stocks = { date, items };
}

/**
 * @param {Array<{ id: number, startDate: number, endDate: number, name: string, reminder?: boolean }>}
 */
function handleCalendarResponse(items) {
  state.components.calendar = items;
}

/**
 * @param {Array<{ name: string, messages: Array<{ sentDate: number, author: string, content: string }> }>} roomsArray
 */
function handleChatResponse(roomsArray) {
  state.components.chat = roomsArray;
}

function handleNewsResponse(data) {
  state.components.news = data;
}

function handleShoppingListResponse(data) {
  state.components.shoppingList = data;
}

/**
 * @this {WebSocket}
 * @param {string} name
 */
function sendLoginRequest(name) {
  this.send(stringifier("Login", name));
}

/**
 * @this {WebSocket}
 * @param {'Calendar/NewEntry'|'Calendar/UpdateEntry'} type
 * @param {{ id: number, startDate: number, endDate: number, name: string, required?: boolean }} data
 */
function sendCalendarRequest(type, data) {
  this.send(stringifier(type, data));
}

/**
 * @this {WebSocket}
 * @param {{ room: string, content: string }} data
 */
function sendChatMessage(data) {
  this.send(stringifier("Chat", data));
}

/**
 * @this {WebSocket}
 * @param {'Shopping/NewEntry'|'Shopping/RemoveEntry'} type
 * @param {{ id: number, amount: number, name: string }} data
 */
function sendShoppingListRequest(type, data) {
  this.send(stringifier(type, data));
}

/**
 * @param {'Error'|'Login'|'Weather'|'Stocks'|'Calendar'|'News'|'Books'|'Chat'|'Shopping'} type
 * @param {any} data
 */
function stringifier(type, data) {
  return JSON.stringify({
    type,
    data,
  });
}
