import React from 'react';
import Arweave from 'arweave';

const arweave = Arweave.init({
    host: 'arweave.net',// Hostname or IP address for a Arweave host
    port: 443,          // Port
    protocol: 'https',  // Network protocol http or https
    timeout: 20000,     // Network request timeouts in milliseconds
    logging: false,     // Enable network request logging
});

const ArweaveContext = React.createContext({
  arweave: null,
  setKey: key => {},
  sessionKey: null,
  sessionAddress: null,
  balance: null,
  busy: false,
  balanceInterval: null
});

class ArweaveProvider extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      arweave: arweave,
      setKey: this.setKey,
      sessionKey: null,
      sessionAddress: null,
      busy: false,
      balance: null,
      balanceInterval: null
    };
  }

  setKey = async (key) =>  {
    const address = await this.state.arweave.wallets.jwkToAddress(key);
    this.setState( state => ({sessionKey: key, sessionAddress: address}));
    this.fetchBalance();
    this.balanceFetcher();
  }

  fetchBalance = async () => {
    try {
        const balance = await this.state.arweave.wallets.getBalance(this.state.sessionAddress);
        this.setState({
            balance: this.state.arweave.ar.winstonToAr(balance)
        });
    } catch(error) {}
  }

  balanceFetcher = () => {
    clearInterval(this.state.balanceInterval);
    const balanceInterval = setInterval(async () => {
        this.fetchBalance();
    }, 10000);
    this.setState({
        balanceInterval
    });
  }

  render  () {
    return (
      <ArweaveContext.Provider value={this.state}>
        {this.props.children}
      </ArweaveContext.Provider>
    );
  }
}

export {arweave, ArweaveContext, ArweaveProvider};
