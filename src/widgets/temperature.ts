import { IObservable, IObserver } from '../interfaces/observer';
import { WheaterData } from '../models/wheterData';

export class TemperatureWidget implements IObserver {
  _observer: IObservable;
  private _temperature: number = 0;

  constructor(observer: IObservable) {
    this._observer = observer;
  }

  update = (observable: IObservable, _args?: any) => {
    const wheaterObservable: WheaterData = observable as WheaterData;

    this._temperature = wheaterObservable.temperature;
    this.render();
  };

  render = () => {
    console.log('Temperature Widget');
    console.log(`Temperature > ${this._temperature}\n`);
  };
}
