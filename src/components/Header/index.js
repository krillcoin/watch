import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Menu, { MenuItem } from 'material-ui/Menu';
import { Link } from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
        minWidth: 200
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};
class Header extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            KrillCoin Watch
                        </Typography>
                        <Grid container justify="flex-start">
                            <Grid item>
                                <Link to="/">
                                    <Button color="inherit">Search</Button>
                                </Link>
                                <Button
                                    color="inherit"
                                    aria-owns={anchorEl ? 'simple-menu' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleClick}
                                >
                                    Charts
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={this.handleClose}
                                >
                                    <Link to="/charts/global-hashrate">
                                        <MenuItem onClick={this.handleClose}>Global HashRate</MenuItem>
                                    </Link>
                                    <Link to="/charts/hashing-distribution">
                                        <MenuItem onClick={this.handleClose}>Hashing Distribution</MenuItem>
                                    </Link>
                                </Menu>
                                <Link to="/news">
                                    <Button color="inherit">News</Button>
                                </Link>
                                <Link to="/about">
                                    <Button color="inherit">What is this?</Button>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="flex-end">
                            <Grid item xs={12}>
                                <Typography variant="body1" color="inherit" align="right">
                                    Status: Connected @ 1234
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);