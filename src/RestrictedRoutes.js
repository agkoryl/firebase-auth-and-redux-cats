import React from 'react';

export default ({isAuthorised, children}) => !isAuthorised ? null : children;