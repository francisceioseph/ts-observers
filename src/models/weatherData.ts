import { IObservable, IObserver } from '../interfaces/observer';

export class WeatherData implements IObservable {
  _changed: boolean = false;
  _observers: IObserver[] = [];

  private _temperature: number = 0;
  private _humidity: number = 0;
  private _pressure: number = 0;

  subscribe = (observer: IObserver) => {
    this._observers = this._observers.concat(observer);
  };

  unsubscribe = (observer: IObserver) => {
    this._observers = this._observers.filter((obs) => obs !== observer);
  };

  setChanged = (changed: boolean) => {
    this._changed = changed;
  };

  notify = (args?: any) => {
    if (this._changed) {
      this._observers.forEach((obs) => obs.update(this, args));
      this.setChanged(false);
    }
  };

  setMeasurements = (
    temperature: number,
    humidity: number,
    pressure: number
  ) => {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;

    this.setChanged(true);
    this.notify();
  };

  get temperature() {
    return this._temperature;
  }

  get humidity() {
    return this._humidity;
  }

  get pressure() {
    return this._pressure;
  }
}
