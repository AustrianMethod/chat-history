import { PropsList } from "../types/interfaces";
import { Message } from "./Message";
import { Response } from "./Response";
import { Typing } from "./Typing";

export function MessageHistory({list = []}: PropsList) {
  return (
    <ul>
      {list.map( (item) => {  
        switch(item.type) {
          case 'message': return <Message from={item.from} message={item.text} time={item.time}/>;
          case 'response': return <Response from={item.from} message={item.text} time={item.time}/>;
          case 'typing': return <Typing from={item.from} message={item.text} time={item.time}/>;
          default: return null;
        }
      })}
    </ul>
  )
}

