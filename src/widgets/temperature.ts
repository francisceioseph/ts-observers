import { IObservable, IObserver } from '../interfaces/observer';
import { WeatherData } from '../models/weatherData';

export class TemperatureWidget implements IObserver {
  _observer: IObservable;
  private _temperature: number = 0;

  constructor(observer: IObservable) {
    this._observer = observer;
  }

  update = (observable: IObservable, _args?: any) => {
    const wheaterObservable: WeatherData = observable as WeatherData;

    this._temperature = wheaterObservable.temperature;
    this.render();
  };

  render = () => {
    console.log('Temperature Widget');
    console.log(`Temperature > ${this._temperature}\n`);
  };
}
