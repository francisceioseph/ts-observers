import { TemperatureWidget } from './widgets/temperature';
import { WheaterData } from './models/wheterData';

const wheatherData = new WheaterData();
const tempWidget = new TemperatureWidget(wheatherData);

wheatherData.subscribe(tempWidget);
wheatherData.setMeasurements(28, 1.25, 0.3);
