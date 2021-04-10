import React from 'react';
import { useHistory } from "react-router-dom";

import {
  IconButton,
  Drawer
} from '@material-ui/core';

const SessionView = (props) => {
  let history = useHistory();

  return (
    <React.Fragment>
      <Drawer anchor="right" open={props.showSession} onClose={()=>{history.goBack();}}>
        Hola
      </Drawer>
    </React.Fragment>
  );
};

export {SessionView};
