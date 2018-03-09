import React from "react";
import {compose} from 'recompose';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actions as blockActions} from "ducks/blocks";
import Card, {CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import ArrowUpIcon from 'material-ui-icons/KeyboardArrowUp';
import ArrowDownIcon from 'material-ui-icons/KeyboardArrowDown';
import {Link} from 'react-router-dom';
import List, {
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
} from 'material-ui/List';
import moment from 'moment';

const styles = theme => ({
    card: {
        maxWidth: 900,
        width: '100%',
        background: 'white'
    },
    header: {
        background: '#F0F0F0',
        padding: 15
    }
});


class BlockInfo extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.height !== this.props.match.params.height) {
            this.fetchBlock(nextProps.match.params.height);
        }
    }

    componentWillMount() {
        this.fetchBlock(this.props.match.params.height)
    }

    fetchBlock = (_height) => {
        console.log('_height ', _height);
        if (_height) {
            this.props.blockActions.fetchBlock(_height)
        }
    }

    render() {
        const {classes, blocks} = this.props;
        return (
            <Grid container justify="center">
                <Grid item>
                    {window.Krillcoin.Policy && blocks.single && <Card className={classes.card}>
                        <div className={classes.header}>
                            <Grid container>
                                <Grid item xs={12} sm={2}>
                                    <Typography variant="title">Height</Typography>
                                    <Typography variant="display2">#{blocks.single.height}</Typography>
                                    <Link to={`/block/${blocks.single.height + 1}`}>
                                        <IconButton>
                                            <ArrowUpIcon />
                                        </IconButton>
                                    </Link>
                                    <Link to={`/block/${blocks.single.height - 1}`}>
                                        <IconButton>
                                            <ArrowDownIcon />
                                        </IconButton>
                                    </Link>
                                </Grid>
                                <Grid item xs={12} sm={10}>
                                    <Typography variant="title">Hash</Typography>
                                    <Typography variant="caption">{blocks.single.hash}</Typography>

                                </Grid>
                            </Grid>
                        </div>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={12} sm={6}>
                                    <List>
                                        <ListItem>
                                            <ListItemText
                                                primary="Transactions"
                                            />
                                            <ListItemSecondaryAction>
                                                {blocks.single.transaction_count}
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText
                                                primary="Transaction Value"
                                            />
                                            <ListItemSecondaryAction>
                                                {window.Krillcoin.Policy.satoshisToCoins(blocks.single.value)} KRL
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText
                                                primary="Block Reward"
                                            />
                                            <ListItemSecondaryAction>
                                                {window.Krillcoin.Policy.satoshisToCoins(blocks.single.reward)} KRL
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <List>
                                        <ListItem>
                                            <ListItemText
                                                primary="Timestamp"
                                            />
                                            <ListItemSecondaryAction>
                                                {moment(blocks.single.timestamp).format('MMMM Do YYYY, h:mm:ss a')}
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText
                                                primary="Difficulty"
                                            />
                                            <ListItemSecondaryAction>
                                                {blocks.single.difficulty}
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText
                                                primary="Size"
                                            />
                                            <ListItemSecondaryAction>
                                                {blocks.single.size} Bytes
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={12}>
                                    <List>
                                        <ListItem>
                                            <ListItemText
                                                primary="Miner"
                                            />
                                            <ListItemSecondaryAction>
                                                <Link to={`/account/${blocks.single.miner_address}`}>{blocks.single.miner_address}</Link>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                            {blocks.single.transactions.map((transaction, index) => (
                                <Grid container key={index}>
                                    <Grid item xs={12} sm={5}>
                                        <Typography variant="title">Sender</Typography>
                                        <Typography variant="caption"><Link to={`/account/${transaction.sender_address}`}>{transaction.sender_address}</Link></Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={5}>
                                        <Typography variant="title">Receiver</Typography>
                                        <Typography variant="caption"><Link to={`/account/${transaction.receiver_address}`}>{transaction.receiver_address}</Link></Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <Typography variant="title">Value</Typography>
                                        <Typography variant="caption">{window.Krillcoin.Policy.satoshisToCoins(transaction.value)} KRL</Typography>
                                    </Grid>
                                </Grid>
                            ))}
                        </CardContent>
                    </Card>}
                </Grid>
            </Grid>
        );
    }
}

BlockInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        blocks: state.blocks
    };
}

function mapPropsToDispatch(dispatch) {
    return {
        blockActions: bindActionCreators(blockActions, dispatch)
    };
}

export default compose(
    connect(mapStateToProps, mapPropsToDispatch),
    withStyles(styles)
)(BlockInfo);
