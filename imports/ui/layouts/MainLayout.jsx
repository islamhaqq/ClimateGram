import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import GridListExampleComplex from '../../ui/components/GridListExampleComplex.jsx';
import TextFieldExampleError from '../../ui/components/TextFieldExampleError.jsx';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

const MainLayout = ({content}) => (
  <div className="main-layout">
    <MuiThemeProvider muiTheme={lightMuiTheme}>
      <div>
        <AppBar
          title="ClimateGram"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <GridListExampleComplex/>
        <TextFieldExampleError/>
        <main>
          {content}
        </main>
      </div>
    </MuiThemeProvider>
  </div>
)
export default MainLayout;
