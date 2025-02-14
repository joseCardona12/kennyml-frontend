export interface IRouterState {
  path: string;
}
export interface IRouter {
  public: IRouterState[];
  private: IRouterState[];
}
