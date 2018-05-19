import * as React from 'react';
import s from './App.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Guest'
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.onChange} />
        <h1 className={s.nope}>Nice to meet you, {this.state.name}</h1>
      </div>
    );
  }
}

export default App;
