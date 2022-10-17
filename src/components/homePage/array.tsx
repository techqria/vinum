import React from "react";
import "./App.css";
import { ReactNode } from "react";

interface State {
  wine1: {
    name: string;
    type: string;
  };
  wine2: {
    name: string;
  };
  wine3: {
    name: string;
  };
}

interface Props {}

class App extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      wine1: {
        name: "vinho",
        type: "tinto",
      },

      wine2: {
        name: "Frank",
      },

      wine3: {
        name: "Jacky",
      },
    };
  }

  override render(): JSX.Element {

    
      return (
        <div className="App">
          <div>
            <h1>{this.state.wine1.name}</h1>
            <h1>{this.state.wine2.name}</h1>
            <h1>{this.state.wine3.name}</h1>
          </div>
        </div>
      );
    }
  }


export default App;