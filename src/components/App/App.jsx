import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppLayout from 'components/Layouts/App/AppLayout';
import ContentLayout from 'components/Layouts/Content/ContentLayout';
import Sidebar from 'components/Sidebar/Sidebar';
import ToggleSidebar from 'components/ToggleSidebar/ToggleSidebar';
import { Pages } from 'components/pages';

import 'styles/main.scss';

const App = () => (
  <AppLayout>
    <Sidebar />
    <ContentLayout>
      <Routes>
        {Object.keys(Pages).map((key) => (
          <Route {...Pages[key]} key={key} />
        ))}
      </Routes>
    </ContentLayout>
    <ToggleSidebar />
  </AppLayout>
);

export default App;
