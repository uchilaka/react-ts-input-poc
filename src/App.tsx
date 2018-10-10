// tslint:disable no-console
import * as React from "react";
import { ChangeEvent, Fragment, KeyboardEvent } from "react";
import { Container, Form } from "semantic-ui-react";
import "./utils/jquery";

interface IScannerState {
  base64Data: string | null;
}

class App extends React.Component {
  // Declaring state
  // public state: { [i: string]: any } = {
  //   base64Data: null
  // };
  public state: IScannerState;

  constructor(props: { [i: string]: any }) {
    super(props);
    this.state = {
      base64Data: ""
    };
    // Bind events
    this.onChange = this.onChange.bind(this);
  }

  // public onChange({ target }: React.ChangeEvent<any>) {
  //   console.log("Event: ", target.value);
  // }
  public onChange($event: ChangeEvent<any>) {
    $event.preventDefault();
    console.log("Event: ", $event.target.value);
    // Convert to base64
    this.setState({
      base64Data: Buffer.from($event.target.value).toString("base64")
    });
  }

  public onKeydown($event: KeyboardEvent<any>) {
    $event.preventDefault();
    console.log(
      `Event (Key code: ${$event.keyCode}) -> (${String.fromCharCode(
        $event.keyCode
      )})`
    );
  }

  public render() {
    return (
      <Fragment>
        <Container text={true}>
          <h1>Sample Form</h1>
          <Form>
            <Form.Field>
              <label>Input</label>
              <textarea
                name="input"
                placeholder="Input from scanner..."
                className={"form-control"}
                onChange={this.onChange}
                onKeyDown={this.onKeydown}
              />
            </Form.Field>

            {this.state.base64Data ? (
              <Form.Field>
                <label>Output</label>
                <textarea
                  name="output"
                  placeholder="Output from scanner..."
                  className={"form-control"}
                  readOnly={true}
                  value={this.state.base64Data}
                />
              </Form.Field>
            ) : null}
          </Form>
        </Container>
      </Fragment>
    );
  }
}

export default App;
