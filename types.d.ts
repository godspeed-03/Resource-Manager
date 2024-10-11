type statistics = {
  cpuUsage: number;
  ramuse: number;
  storage: number;
  };
  
  type getdevicedata = {
    totalStorage:number;
    totalMemory:number;
    cpuModel: string;
  };
  
  type View = 'CPU' | 'RAM' | 'STORAGE';
  
  type FrameWindowAction = 'CLOSE' | 'MAXIMIZE' | 'MINIMIZE';
  
  type EventPayloadMapping = {
    statistics: statistics;
    Staticdata: Staticdata;
    changeView: View;
    sendFrameAction: FrameWindowAction;
  };
  
  type UnsubscribeFunction = () => void;
  
  interface Window {
    electron: {
      SubscribeStatics: (
        callback: (statistics: statistics) => void
      ) => UnsubscribeFunction;
      Staticdata: () => Promise<Staticdata>;
      subscribeChangeView: (
        callback: (view: View) => void
      ) => UnsubscribeFunction;
      sendFrameAction: (payload: FrameWindowAction) => void;
    };
  }