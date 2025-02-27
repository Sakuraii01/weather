import { LatLngExpression, Map as LeafletMap } from "leaflet";
import { useMap } from "react-leaflet";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const API_KEY = "06c2610e6d4a44a5a5544653252102";
const API_URL = "https://api.weatherapi.com/v1/";

const useViewModel = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [center, setCenter] = useState<LatLngExpression>([0, 0]);

  const fetchWeather = async (cityName: any) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(API_URL + "forecast.json", {
        params: {
          key: API_KEY,
          q: cityName,
          lang: "th",
          days: 7,
        },
      });
      setWeather(response.data);
      setCenter([response.data.location.lat, response.data.location.lon]);
      setCity("");
    } catch (err) {
      setError("City not found");
    }
    setLoading(false);
  };
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetchWeather(city);
    }
  };

  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(center, 10); // Updates center when changed
    }
  }, [center]);
  useEffect(() => {
    fetchWeather("Chiang Mai");
  }, []);
  const MapUpdater = ({ center }: { center: LatLngExpression }) => {
    const map = useMap();

    useEffect(() => {
      map.setView(center); // Updates the map center
    }, [center, map]);

    return null;
  };
  return {
    city,
    weather,
    loading,
    error,
    center,
    mapRef,
    MapUpdater,
    setCity,
    fetchWeather,
    handleKeyDown,
  };
};

export default useViewModel;
