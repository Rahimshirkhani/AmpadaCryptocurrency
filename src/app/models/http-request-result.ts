import {Info}  from "../models/info"

export class HttpRequestResult<T>{

  constructor() { }

  public data?: T;
  public info?: Info;

}

