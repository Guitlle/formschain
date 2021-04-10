import React from 'react';
import {Link} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';

const TextButton = withStyles({
  root: {
    color: 'white',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

  }
})(Button);

const Home = (props) => {
  return (
    <div className="hero">
      <h1>Forms on the blockchain</h1>
      <p>
        Make surveys on the permaweb, share them and receive responses.
      </p>
      <hr />
      <h2>Safety first</h2>
      <p>
        To have a better user experience, <Link to="/session"><TextButton size="small">login</TextButton></Link> using your private key. However, you don't need to trust us.
        You can use Formschain without entering your key. Use this app to generate the Form data or the Response data and upload it yourself using arweave CLI or another tool.</p>
    </div>
  );
}

export default Home;
