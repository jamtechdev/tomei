import Avatar from './Avatar.png';
import Logo from './Logo.png';
import './App.css';
import * as http from "http";

function submit(data) {
  http.request(
      {
        href: 'http://localhost:8080/api/register',
        method: 'post',
      },
      res => {
        console.log('res', res);
        alert('Success');
      }

  )
}

function App() {
  return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="logo-box text-center">
              <img src={Logo} alt={Logo}/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-wizard">
            <div className="form-wizard-header">

              <ul className="list-unstyled form-wizard-steps clearfix">
                <li className="active">

                  <span>1</span>

                </li>
                <li><span>2</span></li>
                <li><span>3</span></li>
                <li><span>4</span></li>
                <li><span>5</span></li>
              </ul>
            </div>
            <div className="step-title-top">
              <div className="step-title-inner">
                <p>Step: 1</p>
                <p>jdjsad</p>
              </div>
              <div className="step-title-inner">
                <p>Step: 2</p>
                <p>jdjsad</p>
              </div>
              <div className="step-title-inner">
                <p>Step: 3</p>
                <p>jdjsad</p>
              </div>
              <div className="step-title-inner">
                <p>Step: 4</p>
                <p>jdjsad</p>
              </div>
              <div className="step-title-inner">
                <p>Step: 5</p>
                <p>jdjsad</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="box-size">
            <div className="row">
              <div className="col-md-12">
                <div className="per-bg text-center">Create your account</div>
                <div className="desc">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="avatar text-center">
                  <img src={Avatar} alt={"Avatar"}/>
                    <p>Upload</p>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="form-wizard">

                  <fieldset className="wizard-fieldset show">

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="Name" className="">Name</label>
                          <input type="text" className="form-control wizard-required" id=""/>

                          <div className="wizard-form-error"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="Email" className="">Email</label>
                          <input type="text" className="form-control wizard-required" id=""/>

                          <div className="wizard-form-error"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="Password" className="">Password</label>
                          <input type="text" className="form-control wizard-required" id=""/>

                          <div className="wizard-form-error"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="Confirm" className="">Confirm Password</label>
                          <input type="password" className="form-control wizard-required" id=""/>

                          <div className="wizard-form-error"/>
                        </div>
                      </div>
                    </div>


                    <div className="form-group clearfix">
                      < a href="javascript:;" className="form-wizard-next-btn float-right">Save & Next</a>
                    </div>
                  </fieldset>
                  <fieldset className="wizard-fieldset">
                    <h5>Account Information</h5>
                    <div className="form-group">
                      <input type="email" className="form-control wizard-required" id="email"/>
                      <label htmlFor="email" className="wizard-form-text-label">Email*</label>
                      <div className="wizard-form-error"/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control wizard-required" id="username"/>
                      <label htmlFor="username" className="wizard-form-text-label">User Name*</label>
                      <div className="wizard-form-error"/>
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control wizard-required" id="pwd"/>
                      <label htmlFor="pwd" className="wizard-form-text-label">Password*</label>
                      <div className="wizard-form-error"/>
                      <span className="wizard-password-eye"><i className="far fa-eye"/></span>
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control wizard-required" id="cpwd"/>
                      <label htmlFor="cpwd" className="wizard-form-text-label">Confirm Password*</label>
                      <div className="wizard-form-error"/>
                    </div>
                    <div className="form-group clearfix">
                      <a href="javascript:;" className="form-wizard-previous-btn float-left">Previous</a>
                      <a href="javascript:;" onClick={submit({})} className="form-wizard-next-btn float-right">Next</a>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
  );
}

export default App;
