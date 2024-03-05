import Raven from 'raven-js';
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        });
        // You can also log the error to an error reporting service here
        Raven.config('https://40b5111085cd45e2b5e93a68c23e3795@o144116.ingest.sentry.io/1194253')
        console.log(Raven.isSetup());
        Raven.captureException(error, { extra: errorInfo });
        Raven.captureMessage('Broken!')
    }

    render() {
        if (this.state.hasError) {
            // You can customize the error message displayed to the user
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <p>{this.state.error && this.state.error.toString()}</p>
                    <p>{this.state.errorInfo && this.state.errorInfo.componentStack}</p>
                </div>
            );
        }

        // Render the children components if there's no error
        return this.props.children;
    }
}

export default ErrorBoundary;