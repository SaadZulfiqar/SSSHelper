import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        margin: theme.spacing(1),
    }
}));

const MaterialQuestions = (data) => {
    const { index, question } = data;
    const classes = useStyles();
    return (
        <div className="admin-survey-questions-card-wrapper">
            <Card className={classes.card}>
                <CardContent>
                    <TextField id="question-name" label={`Question ${index + 1}.`} className={classes.textField} value={question.Question} onChange={() => { }} margin="normal" fullWidth InputLabelProps={{ shrink: true, }} />
                    {question.Options && question.Options.map((option, index) => {
                        return (
                            <div key={index}>
                                <TextField id={`${index}-option-name`} label={`Option ${index + 1}.`} className={classes.textField} value={option.Options} onChange={() => { }} margin="normal" fullWidth InputLabelProps={{ shrink: true, }} />
                            </div>
                        )
                    })}
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}

const MaterialAddQuestion = (data) => {
    const { onAddNewQuestion } = data;
    const classes = useStyles();
    return (<Button variant="contained" color="primary" className={classes.button} onClick={onAddNewQuestion}> Add Question </Button>);
}

export default class QuestionsComponent extends Component {
    static propTypes = {
        Questions: PropTypes.array,
        onAddNewQuestion: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    onAddNewQuestion = () => {
        this.props.onAddNewQuestion();
    };

    render() {
        const { Questions } = this.props;
        console.log(Questions);
        return (
            <div>
                <div className="admin-survey-questions-add-new">
                    <MaterialAddQuestion onAddNewQuestion={this.onAddNewQuestion} />
                </div>
                <div className="admin-survey-questions-list">
                    <form>
                        {Questions && Questions.map((question, index) => { return <MaterialQuestions key={index} index={index} question={question} /> })}
                    </form>
                </div>
            </div>
        );
    }
}