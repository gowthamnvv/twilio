
import './App.css';
import {Device} from '@twilio/voice-sdk';

const token = 'your_twilio_token_here'

const callNumber = () => {
  console.log('calling...')
  const device = new Device(token)
  device.on('registered', () => {
    console.log('Device ready')
  })

  device.connect({
    params: {
      To: '2369999999',
      From: '6049999999',
      agentId: 'pp_gowtham_naraharisetty',
    },
  }).then((call) => {
    call.on('accept', () => console.log('accept'))
    call.on('disconnect', () => console.log('disconnect'))
    call.on('cancel', () => console.log('cancel'))
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
        Testing twilio sdk
        <button onClick={callNumber}> Call </button>
      </header>
    </div>
  );
}

export default App;
