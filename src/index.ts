import { TemperatureWidget } from './widgets/temperature';
import { WeatherData } from './models/weatherData';

const wheatherData = new WeatherData();
const tempWidget = new TemperatureWidget(wheatherData);

wheatherData.subscribe(tempWidget);
wheatherData.setMeasurements(28, 1.25, 0.3);
