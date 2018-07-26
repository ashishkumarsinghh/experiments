import React, { Component } from 'react';

class Subscribe extends Component {
  render() {
    return (
      <div className="subscribe">
        <h2>Subscribe</h2>
        <p>Get the best content from this place delivered directly to your inbox.</p>
        <form>
          <input type = "email" name = "email" placeholder = "example@domain.com" required />
          <input type = "submit" name = "submit" onClick = "subscribe()" value = "Subscribe" />
        </form>
      </div>
    );
  }
}

export default Subscribe;
