import { createBrowserRouter, Navigate } from 'react-router-dom';
import ProfessionalSiteBase from '../professionalSiteBase.tsx';
import ProfessionalSite from '../professionalSite.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProfessionalSiteBase />,
    children: [
      {
        index: true,
        element: <Navigate to='/softwareDeveloper' replace />,
      },
      {
        path: 'softwareDeveloper',
        element: <ProfessionalSite />,
      },
    ],
  },
]);

export default router;
