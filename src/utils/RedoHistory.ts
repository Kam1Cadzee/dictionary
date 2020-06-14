export class RedoHistory {
  private history: IAction | null = null;
  private current: IAction | null = null;
  private handlers: any[] = [];

  constructor() {
    this.current = this.history = {
      prevAction: null,
      payload: '',
      action: '',
      nextAction: null,
    }
  }

  public addHandler = (obj: any) => {
    this.handlers.push(obj);
  };

  private getRevertAction = (action: string) => {
    const findItem = this.handlers.find(h => {
      return Object.keys(h).some(k => k === action)
    });

    const findName = Object.keys(findItem).filter(k => k !== action)[0];
    return findItem[findName];
  }
  private getAction = (action: string) => {
    const findItem = this.handlers.find(h => {
      return Object.keys(h).some(k => k === action)
    });

    return findItem[action];
  }

  public addAction = (action: IActionData) => {
    this.history = this.current;
    const newAction: IAction = {
      nextAction: null,
      prevAction: this.history,
      ...action
    };
    this.history!.nextAction = newAction;
    this.history = newAction;
    this.current = this.history;
  }

  public prev = () => {
    if (this.current === null || this.current.prevAction === null) {
      return;
    }
    const revert = this.getRevertAction(this.current!.action);
    revert(this.current!.payload);
    this.current = this.current!.prevAction;
  }

  public next = () => {
    if (this.current === null || this.current.nextAction === null) {
      return;
    }
    this.current = this.current!.nextAction;
    const action = this.getAction(this.current!.action);
    action(this.current!.payload);
  }

  public isPrev = () => {
    return this.current !== null ? this.current.prevAction !== null : false;
  }

  public isNext = () => {
    return this.current !== null ? this.current.nextAction !== null : false;
  }
}


interface IAction extends IActionData {
  //revertAction: string;
  //
  nextAction: IAction | null;
  prevAction: IAction | null;
}

interface IActionData {
  action: string;
  payload: any;
}
