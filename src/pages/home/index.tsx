import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import useViewModel from "./viewModel";
import { Layout } from "../../component/layout";
import {
  SearchRounded,
  LandslideRounded,
  ThermostatRounded,
  WbSunnyRounded,
  AirRounded,
} from "@mui/icons-material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { Forecast, Weather } from "./component/weather";
import { MoreInfo } from "../../component/info";

const Home = () => {
  const {
    city,
    weather,
    loading,
    error,
    center,
    setCity,
    fetchWeather,
    MapUpdater,
    handleKeyDown,
  } = useViewModel();

  return (
    <Layout>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <section id="search">
        <div className="bg-white rounded-xl w-full relative">
          <button
            className="absolute text-gray-500 top-[6px] left-3"
            onClick={() => fetchWeather(city)}
          >
            <SearchRounded />
          </button>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search for a city"
            className="py-2 ps-11 w-full rounded-xl"
          />
        </div>
        {error && <p className="text-right italic text-red-400">{error}</p>}
      </section>
      {weather && (
        <div>
          <section id="weather">
            <Weather weather={weather} />
          </section>
          <section id="forecast">
            <Forecast type="Hourly" weather={weather} />
            <Forecast type="Weekly" weather={weather} />
          </section>
          <section id="more-info">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 border-y py-5 my-5 border-secondary">
              <MoreInfo
                icon={<LandslideRounded fontSize="small" />}
                title="HUMIDITY"
                value={`${weather.current.humidity}%`}
                unit=""
                description={`The dew point is ${
                  Math.round(weather.current.dewpoint_c) || "-"
                } right now.`}
              />
              <MoreInfo
                icon={<AirRounded fontSize="small" />}
                title="WIND"
                value={`${weather.current.wind_mph} `}
                unit="m/h"
                description={`Direction : ${weather.current.wind_dir}`}
              />
              <MoreInfo
                icon={<ThermostatRounded fontSize="small" />}
                title="FEELS LIKE"
                value={`${Math.round(weather.current.feelslike_c)}°C`}
                unit=""
                description=""
              />
              <MoreInfo
                icon={<WbSunnyRounded fontSize="small" />}
                title="UV INDEX"
                value={`${weather.current.uv}`}
                unit="MODERATE"
                description=""
              />
            </div>
          </section>
          <section id="map">
            <div className="border rounded">
              <MapContainer
                style={{ height: "300px", width: "100%" }}
                center={center}
                zoom={10}
              >
                <MapUpdater center={center} />
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[weather.location.lat, weather.location.lon]}>
                  <Popup>{weather.location.name}</Popup>
                </Marker>
              </MapContainer>
            </div>
          </section>
        </div>
      )}
    </Layout>
  );
};
export default Home;
