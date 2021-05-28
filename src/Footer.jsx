import React, { Component } from 'react'

export default class Footer extends Component {

    state={
        name:"",
        email:"",
        description:"",
    };

    habdleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
        }
    handleFormSubmit = (e)=>{
            e.preventDefault();
        console.log("submited...all okey")
         } 
    render() {
        return (
            <div>
            
                <h1>Get in touch</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        Enter your name
                    <input 
                    type="text"
                    name="name"
                    value={this.state.name} 
                    onChange={this.habdleChange}/>
                    </label>
                    
                     <label>
                         Enter your email
                          {/* <input 
                          type="text" 
                          name="email"
                          value={this.state.email} 
                          onChange={this.handleChange}/> */}
                          <input  
                          type="text"
                          name="email"
                          value={this.state.email}
                          onChange={this.habdleChange}/>
                    </label>
                    <br />
                    <textarea 
                    name="description" 
                    id="" cols="30" 
                    rows="10" 
                    value={this.state.description}
                    onChange={this.habdleChange}>

                    </textarea>

                     <br />           

                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}
