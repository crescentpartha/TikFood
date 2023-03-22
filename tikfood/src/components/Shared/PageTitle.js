import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageTitle = ({ title }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title} - TikFood</title>
            </Helmet>
        </HelmetProvider>
    );
};

export default PageTitle;