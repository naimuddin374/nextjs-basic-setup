import PropTypes from 'prop-types';
import React from 'react';
import InternalError from '../pages/500';



class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(e) {
        console.log('e', e);
        return { hasError: true };
    }

    componentDidCatch(e) {
        console.log('e', e);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <InternalError />;
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.any.isRequired
};


export async function getStaticProps() {
    return {
        props: {
            children: null
        }, // will be passed to the page component as props
    };
}
export default ErrorBoundary;
