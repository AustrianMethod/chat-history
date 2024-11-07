export interface PropsMessage {
  from: {
    name: string;
  };
  message: string | undefined;
  time: string;
}

export interface PropsList {
  list: Message[];
}

export interface Message {
  id: string;
  from: {
    name: string;
  };
  type: 'response' | 'message' | 'typing';
  time: string;
  text?: string | undefined;
}