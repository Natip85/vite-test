import { TextSlider } from "./components/TextSlider";
const messages = [
  {
    text: "תלונות רבות בחודש האחרון על נקיון, תחזוקה בשירותי גברים קומה 1",
    subtext: "סה״כ 36 תלונות התקבלו החודש",
  },
  {
    text: "תלונות רבות בחודש האחרון על נקיון, תחזוקה בשירותי גברים קומה 2",
    subtext: "סה״כ 37 תלונות התקבלו החודש",
  },
  {
    text: "תלונות רבות בחודש האחרון על נקיון, תחזוקה בשירותי גברים קומה 3",
    subtext: "סה״כ 38 תלונות התקבלו החודש",
  },
  {
    text: "תלונות רבות בחודש האחרון על נקיון, תחזוקה בשירותי גברים קומה 4",
    subtext: "סה״כ 39 תלונות התקבלו החודש",
  },
];
function App() {
  return (
    <div className="h-screen bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-purple-400 to-purple-800 p-20">
      <TextSlider messages={messages} />
    </div>
  );
}

export default App;
