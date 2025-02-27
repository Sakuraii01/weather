import { days } from "../../constant/date";
type ForecastBoxProps = {
  day_of_week?: string;
  forcastTime?: Date;
  currentTime: Date;
  temp: number;
  image: string;
};
export const ForcastBox = (props: ForecastBoxProps) => {
  const isNow = () => {
    if (props.forcastTime) {
      return props.forcastTime.getHours() === props.currentTime.getHours();
    }
    if (props.day_of_week) {
      return props.day_of_week === days[props.currentTime.getDay()];
    }
    return false;
  };
  return (
    <div
      className={`rounded-full ${
        isNow() ? "bg-linear-gradient-2" : `bg-secondary`
      } py-4 px-2 w-14 text-center shadow-2xl flex-none`}
    >
      <p className="text-white text-sm">
        {isNow()
          ? props.day_of_week
            ? "Today"
            : "Now"
          : props.day_of_week ||
            (props.forcastTime && `${props.forcastTime.getHours()}:00`)}
      </p>
      <img src={props.image} className="mx-auto my-2" />
      <p className="text-white">{props.temp}°</p>
    </div>
  );
};
