import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppLayout from 'components/Layouts/App/AppLayout';
import ContentLayout from 'components/Layouts/Content/ContentLayout';
import NotFound from 'components/pages/NotFound';
import PrivateRoute from 'components/PrivateRoutes/PrivateRoutes';
import Sidebar from 'components/Sidebar/Sidebar';
import ToggleSidebar from 'components/ToggleSidebar/ToggleSidebar';

import { PrivatePages } from 'components/pages';

const Pages = () => (
  <AppLayout>
    <Sidebar />
    <ContentLayout>
      <Routes>
        {Object.keys(PrivatePages).map((key) => (
          <Route
            element={<PrivateRoute Component={PrivatePages[key].element} />}
            path={PrivatePages[key].path}
            key={key}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ContentLayout>
    <ToggleSidebar />
  </AppLayout>
);
export default Pages;
