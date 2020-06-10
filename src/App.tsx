import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from './routing';

export const App: FC = () => {
  return (
    <>
      <Route component={Routes} />
    </>
  );
};
