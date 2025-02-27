export const pictureWeatherRender = (time: Date, code: number) => {
  const picturePath = () => {
    switch (code) {
      case 1000:
        return "cloud mid rain.svg";
      case 1003:
        return "cloud mid rain.svg";
      case 1006:
        return "cloud mid rain.svg";
      case 1009:
        return "cloud mid rain.svg";
      case 1030:
        return "Tornado.svg";
      case 1063:
        return "cloud mid rain.svg";
      case 1066:
        return "cloud mid rain.svg";
      case 1069:
        return "cloud mid rain.svg";
      case 1072:
        return "cloud mid rain.svg";
      case 1087:
        return "cloud angled rain.svg";
      case 1114:
        return "cloud angled rain.svg";
      case 1117:
        return "cloud angled rain.svg";
      case 1135:
        return "cloud angled rain.svg";
      case 1147:
        return "cloud angled rain.svg";
      case 1150:
        return "cloud angled rain.svg";
      case 1153:
        return "cloud angled rain.svg";
      case 1168:
        return "cloud angled rain.svg";
      case 1171:
        return "cloud angled rain.svg";
      case 1180:
        return "cloud angled rain.svg";
      case 1183:
        return "cloud angled rain.svg";
      case 1186:
        return "cloud angled rain.svg";
      case 1189:
        return "cloud angled rain.svg";
      case 1192:
        return "cloud angled rain.svg";
      case 1195:
        return "cloud angled rain.svg";
      case 1198:
        return "cloud angled rain.svg";
      case 1201:
        return "cloud angled rain.svg";
      case 1204:
        return "cloud mid rain.svg";
      case 1207:
        return "cloud mid rain.svg";
      case 1210:
        return "cloud mid rain.svg";
      case 1213:
        return "cloud mid rain.svg";
      case 1216:
        return "cloud mid rain.svg";
      case 1219:
        return "cloud mid rain.svg";
      case 1222:
        return "cloud mid rain.svg";
      case 1225:
        return "cloud mid rain.svg";
      case 1237:
        return "cloud mid rain.svg";
      case 1240:
        return "cloud mid rain.svg";
      case 1243:
        return "cloud mid rain.svg";
      case 1246:
        return "cloud mid rain.svg";
      case 1249:
        return "cloud mid rain.svg";
      case 1252:
        return "cloud mid rain.svg";
      case 1255:
        return "cloud mid rain.svg";
      case 1258:
        return "cloud mid rain.svg";
      case 1261:
        return "cloud mid rain.svg";
      case 1264:
        return "cloud mid rain.svg";
      case 1273:
        return "cloud mid rain.svg";
      case 1276:
        return "cloud mid rain.svg";
      case 1279:
        return "cloud mid rain.svg";
      case 1282:
        return "cloud mid rain.svg";
    }
  };

  const path =
    picturePath() === "Tornado.svg"
      ? picturePath()
      : time.getHours() > 6 && time.getHours() < 18
      ? `Sun ${picturePath()}`
      : `Moon ${picturePath()}`;

  return path;
};
