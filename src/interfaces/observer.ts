export interface IObserver {
  _observer: IObservable;

  update: (observable: IObservable, args?: any) => void;
}

export interface IObservable {
  _changed: boolean;
  _observers: IObserver[];

  subscribe: (observer: IObserver) => void;
  unsubscribe: (observer: IObserver) => void;
  setChanged: (changed: boolean) => void;
  notify: (args?: any) => void;
}
