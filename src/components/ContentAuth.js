import '../App.css';
import '../css/styles.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function App() {
  return (
    <div className='container-fluid' style={{minHeight: 600}}>
        <div className='row py-5'>
            <div className='col-md-6 offset-3'>
                <Tabs
                    defaultActiveKey="login"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="login" title="Login">
                        <form>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="loginName">Email</label>
                                <input type="email" id="loginName" class="form-control" />
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="loginPassword">Password</label>
                                <input type="password" id="loginPassword" class="form-control" />
                            </div>

                            <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
                        </form>
                    </Tab>
                    <Tab eventKey="register" title="Register">
                        <form>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="registerName">Name</label>
                                <input type="text" id="registerName" class="form-control" />
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="registerEmail">Email</label>
                                <input type="email" id="registerEmail" class="form-control" />
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="registerPassword">Password</label>
                                <input type="password" id="registerPassword" class="form-control" />
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="registerRepeatPassword">Repeat password</label>
                                <input type="password" id="registerRepeatPassword" class="form-control" />
                            </div>

                            <button type="submit" class="btn btn-primary btn-block mb-3">Register</button>
                        </form>
                    </Tab>
                </Tabs>
            </div>
        </div>
    </div>
  );
}

export default App;
