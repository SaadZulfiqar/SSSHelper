import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchServey } from '../../../services/serveyDashboard';
import { getServeyPending, getServey, getServeyError } from '../../../reducers/serveyDashboard';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import QuestionsComponent from '../Questions';
import ConfigurationsComponent from '../Configurations';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const MaterialTabs = (data) => {
    const classes = useStyles();
    const { tab, onTabChange } = data;
    const value = 0;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={tab} onChange={onTabChange} aria-label="simple tabs example">
                    <Tab label="Questions" {...a11yProps(0)} />
                    <Tab label="Configurations" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={tab} index={0}>
                <QuestionsComponent />
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <ConfigurationsComponent />
            </TabPanel>
        </div>
    );
}

class DashboardComponent extends Component {
    static propTypes = {
        getByServey: PropTypes.func,
        error: PropTypes.string,
        servey: PropTypes.object,
        pending: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = { tab: 0 };
    }

    componentWillMount() {
        this.props.fetchServey(1);
    }

    onTabChange = (event, newValue) => this.setState({ tab: newValue });

    render() {
        const { Questions } = this.props;
        return (
            <div className="admin-servey-dashboard">
                <MaterialTabs {...this.props} {...this.state} onTabChange={this.onTabChange} />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    error: getServeyError(state),
    servey: getServey(state),
    pending: getServeyPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchServey: fetchServey
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardComponent);
