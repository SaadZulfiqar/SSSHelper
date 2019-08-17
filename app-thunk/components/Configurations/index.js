import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { fetchConfigurations, toggleConfigurationsDialog } from '../../services/configurations';
import { getConfigurationsError, getConfigurations, getConfigurationsPending, getToggleConfigurationsDialog } from '../../reducers/configurations';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  radioroot: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
    marginTop: 0,
    marginBottom: 0,
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));

function ControlledExpansionPanels(data) {
  const config = data.config;
  console.log('configurations: ', data);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{config.config}</Typography>
          {/* <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography> */}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {config.config}
          </Typography>
        </ExpansionPanelDetails>
        <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
              aria-label="gender"
              name="gender1"
              className={classes.group}
              value="other"
              onChange={handleChange}
              >
              <FormControlLabel value="female" control={<Radio />} label={config.options[0]} />
              <FormControlLabel value="male" control={<Radio />} label={config.options[1]} />
              <FormControlLabel value="other" control={<Radio />} label={config.options[2]} />
              <FormControlLabel value="option4" control={<Radio />} label={config.options[3]} />
              </RadioGroup>
        </FormControl>
      </ExpansionPanel>
  );
  }

class ConfigurationsComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount = () => { 
      console.log('****************');
      this.props.fetchConfigurations();
     };

    render() {
      const { configurations, pending, openDialog } = this.props;

        return (
            <div>
              {configurations.map((conf, index) => { return( <ControlledExpansionPanels key={index} config={conf} />); })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
  error: getConfigurationsError(state),
  configurations: getConfigurations(state),
  pending: getConfigurationsPending(state),
  openDialog: getToggleConfigurationsDialog(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchConfigurations: fetchConfigurations,
  toggleConfigurationsDialog: toggleConfigurationsDialog
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigurationsComponent);