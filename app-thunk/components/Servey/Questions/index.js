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
        float: "right"
    }
}));

const MaterialQuestions = (data) => {
    const { questionIndex, question, onAddNewQuestionOption } = data;
    const classes = useStyles();
    return (
        <div className="admin-survey-questions-card-wrapper">
            <Card className={classes.card}>
                <CardContent>
                    <TextField id="question-name" label={`Question ${questionIndex + 1}.`} className={classes.textField} value={question.Question} onChange={() => { }} margin="normal" fullWidth InputLabelProps={{ shrink: true, }} />
                    <MaterialAddQuestionOption questionIndex={questionIndex} onAddNewQuestionOption={onAddNewQuestionOption} />
                    {question.Options && question.Options.map((option, optionIndex) => {
                        return (
                            <div key={optionIndex}>
                                <TextField id={`${optionIndex}-option-name`} label={`Option ${optionIndex + 1}.`} className={classes.textField} value={option.Options} onChange={() => { }} margin="normal" fullWidth InputLabelProps={{ shrink: true }} />
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

const MaterialAddQuestionOption = (data) => {
    const { questionIndex, onAddNewQuestionOption } = data;
    const classes = useStyles();
    return (<Button variant="contained" color="primary" className={classes.button} onClick={() => onAddNewQuestionOption(questionIndex) }> Add Option </Button>);
}

export default class QuestionsComponent extends Component {
    static propTypes = {
        Questions: PropTypes.array,
        onAddNewQuestion: PropTypes.func,
        onAddNewQuestionOption: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    onAddNewQuestion = () => {
        this.props.onAddNewQuestion();
    };

    onAddNewQuestionOption = (questionIndex) => {
        this.props.onAddNewQuestionOption(questionIndex);
    }

    render() {
        const { Questions } = this.props;
        return (
            <div>
                <div className="admin-survey-questions-add-new">
                    <MaterialAddQuestion onAddNewQuestion={this.onAddNewQuestion} />
                </div>
                <div className="admin-survey-questions-list">
                    <form>
                        {Questions && Questions.map((question, questionIndex) => { return <MaterialQuestions key={questionIndex} questionIndex={questionIndex} question={question} onAddNewQuestionOption={this.onAddNewQuestionOption} /> })}
                    </form>
                </div>
            </div>
        );
    }
}