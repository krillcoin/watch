import React from 'react';
import { withStyles } from 'material-ui/styles';
import Search from 'components/Search';
import Header from 'components/Header';
import Footer from 'components/Footer';

const styles = theme => ({
    wrap: {
        padding: theme.typography.pxToRem(30)
    }
})

class Layout extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Header/>
                    <div className={classes.wrap}>
                        <Search/>
                        {this.props.children}
                    </div>
                <Footer/>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Layout);