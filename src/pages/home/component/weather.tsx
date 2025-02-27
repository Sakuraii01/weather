import { pictureWeatherRender } from "../../../constant/picture";
import { ForcastBox } from "../../../component/forecast";
import { days } from "../../../constant/date";

const CurrentDate = new Date();
type ForecastProps = {
  type: "Hourly" | "Weekly";
  weather: any;
};
export const Forecast = (props: ForecastProps) => {
  return (
    <div>
      <div>
        <div className="flex gap-2 mx-2">
          <h4 className="text-white font-semibold text-lg">{props.type}</h4>
        </div>
        <div className="flex gap-4 my-3 overflow-x-scroll">
          {props.type === "Hourly"
            ? props.weather.forecast.forecastday[0].hour
                .filter(
                  (data: any) =>
                    new Date(data.time).getHours() >= CurrentDate.getHours()
                )
                .map((data: any, index: number) => (
                  <ForcastBox
                    key={index}
                    currentTime={CurrentDate}
                    forcastTime={new Date(data.time)}
                    image={`/icon/WeatherSmall/${pictureWeatherRender(
                      new Date(data.time),
                      Number(data.condition.code)
                    )}`}
                    temp={Math.round(data.temp_c)}
                  />
                ))
            : props.weather.forecast.forecastday.map(
                (data: any, index: number) => (
                  <ForcastBox
                    key={index}
                    currentTime={CurrentDate}
                    day_of_week={days[new Date(data.date).getDay()]}
                    image={`/icon/WeatherSmall/${pictureWeatherRender(
                      new Date(data.time),
                      Number(data.day.condition.code)
                    )}`}
                    temp={Math.round(data.day.avgtemp_c)}
                  />
                )
              )}
        </div>
      </div>
    </div>
  );
};
type WeatherProps = {
  weather: any;
};
export const Weather = (props: WeatherProps) => {
  return (
    <div className="text-white text-center py-5 bg-linear-gradient-3 rounded-4xl my-3">
      <h2 className="text-3xl font-light my-3">
        {props.weather.location.name}
      </h2>
      <div className="mx-auto w-fit drop-shadow-xl">
        <img
          src={`/icon/WeatherBig/${pictureWeatherRender(
            CurrentDate,
            Number(props.weather.current.condition.code)
          )}`}
          alt={props.weather.current.condition.text}
        />
      </div>
      <p className="text-[64px] font-light">
        {Math.round(props.weather.current.temp_c)}°C
      </p>
      <p className="text-gray-300 font-semibold">
        {props.weather.current.condition.text}
      </p>
      <div className="flex gap-2 justify-center font-semibold">
        <p>H:29°C</p>
        <p>L:29°C</p>
      </div>
    </div>
  );
};
