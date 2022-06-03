import { reactive } from "vue";
import defaultCalendar from "./components/calendar/example_backend_response.json";
import defaultChat from "./components/chat/example_backend.json";
import defaultNews from "./components/news/example_news_response.json";
import defaultShoppingList from "./components/shopping/example_backend_response.json";
import defaultStocks from "./components/stocks/example_backend_response.json";
import defaultWeather from "./components/weather/example_openweathermap_query.json";

const defaultLayout = [
  {
    title: "Weather",
    icon: "ThermometerIcon",
    component: "WeatherContainer",
    row: 1,
    rowSpan: 1,
    column: 1,
    columnSpan: 2,
  },
  {
    title: "Gains",
    icon: "LineChartIcon",
    component: "StocksContainer",
    row: 2,
    rowSpan: 1,
    column: 1,
    columnSpan: 2,
  },
  {
    title: "Calendar",
    icon: "CalendarIcon",
    component: "CalendarCardBodyContainer",
    row: 1,
    rowSpan: 2,
    column: 3,
    columnSpan: 4,
  },
  {
    title: "News",
    icon: "Globe2Icon",
    component: "NewsContainer",
    row: 1,
    rowSpan: 2,
    column: 7,
    columnSpan: 6,
  },
  {
    title: "Book recommendations",
    icon: "BookIcon",
    component: "BooksContainer",
    row: 3,
    rowSpan: 2,
    column: 1,
    columnSpan: 6,
  },
  {
    title: "Chat",
    icon: "MessageCircleIcon",
    component: "ChatContainer",
    row: 3,
    rowSpan: 2,
    column: 7,
    columnSpan: 6,
  },
];

export default reactive({
  page: "dashboard",
  layout: defaultLayout,
  user: "default",
  activeModal: "",
  locale: "sv-SE",
  socketURL: "ws://localhost:8080",
  socket: null,
  activeChat: "Living room",
  components: {
    weather: defaultWeather,
    stocks: defaultStocks,
    calendar: defaultCalendar,
    chat: defaultChat,
    news: defaultNews,
    shoppingList: defaultShoppingList,
  },
});
