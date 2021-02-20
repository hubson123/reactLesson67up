import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';
import '../styles/ContactPage.css';
class ContactPage extends Component {
  state = { val:'' }
  handleChange = (e) =>{
this.setState({
  val:e.target.value
})}
handleSubmit = (e) =>{
e.preventDefault();
this.setState({
  value:''
})
}
  
  render() { 
    return ( <div className="contact">
<form onSubmit={this.handleSubmit}>
<h3>Napisz do nas</h3>
<textarea onChange={this.handleChange} value={this.state.val} placeholder="Wpisz wiadomość: "></textarea>
<button>Wyślij</button>
</form>
<Prompt when={this.state.val} message="masz niewypełnony formularz. Czy na pewno chcesz opuścić tę stronę?"
/>
    </div> );
  }
}
 
export default ContactPage;

