// TODO: REPLACE THIS WITH A CONTEXT PROVIDER
// EVERYTHING IN `VIEWER.JS` COULD USE THIS FOR APPROPRIATE CONTEXT
import ToolbarRow from './ToolbarRow';
import { connect } from 'react-redux';
import { getActiveContexts } from './../store/layout/selectors.js';

const mapStateToProps = state => {
  const { viewports } = state;
  return {
    viewports: viewports.viewportSpecificData,
    activeViewportIndex: viewports.activeViewportIndex,
    activeContexts: getActiveContexts(state),
  };
};

const ConnectedToolbarRow = connect(mapStateToProps)(ToolbarRow);

export default ConnectedToolbarRow;
