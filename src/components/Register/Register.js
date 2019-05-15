import React from 'react';
import './Register.css';

const Register = ({ onRouteChange }) => {
  return (
    <article className="signin br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 white">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f5 white" htmlFor="Name">Name</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white" type="text" name="name"  id="name" />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f5 white" htmlFor="Name">Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white" type="email" name="email-address"  id="email" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f5 white" htmlFor="password">Password</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white" type="password" name="password"  id="password" />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={() => onRouteChange('home')}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib white"
              type="submit"
              value="Register" />
          </div>
        </div>
      </main>
    </article>
  );
}

export default Register;
