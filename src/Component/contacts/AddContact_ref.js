import React, { Component } from "react";

class AddContact extends Component {
    constructor(props){
        super(props);
        this.nameInput=React.createRef();
        this.emailInput=React.createRef();
        this.phoneInput=React.createRef();

    }
 
  onSubmit=(e)=>{
    e.preventDefault();
    const contact={
        name:this.nameInput.current.value,
        email:this.emailInput.current.value,
        phone:this.phoneInput.current.value
    }
    console.log(contact);
    
  };
  static defaultProps = {
      name:'raman singh',
      email:'raman@gmail.com',
      phone:'7798569'
  };
 
  render() {
      const{name,email,phone}=this.props;
    return (
      <div className="card mb-3">
        <div className="card-Header">AddContact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="Form-group">
              <label htmlFor="name">name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                defaultValue={name}
                ref={this.nameInput}
                
              />
            </div>
            <div className="Form-group">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email"
                defaultValue={email}
                ref={this.emailInput}
               
              />
            </div>
            <div className="Form-group">
              <label htmlFor="phone">phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter phone...."
                defaultValue={phone}
                ref={this.phoneInput}
                
              />
            </div>
            <input
              type="submit"
              value="AddContact"
              className="btn btn-block bt-light"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default AddContact;
