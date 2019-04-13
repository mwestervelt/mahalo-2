import React, { Component } from 'react';
import Calendar from 'react-calendar';


class CalendarComp extends Component {

  state = {
    value: new Date(),
  }

  onChange = value => this.setState({ value })

  render() {
    console.log(this.state.value);
      const { value } = this.state;

      return (
        <div className="Sample">
          <header>
            <h1>this is the calendar</h1>
          </header>
          <div className="Sample__container">
            <main className="Sample__container__content">
              <Calendar
                onChange={this.onChange}
                showWeekNumbers
                value={value}
              />
            </main>
          </div>
        </div>
      );
    }
  }

export default CalendarComp;
