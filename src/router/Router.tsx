import { createBrowserRouter, Navigate } from 'react-router-dom';
import ProfessionalSiteBase from '../professionalSiteBase.tsx';
import ProfessionalSite from '../professionalSite.tsx';
import Resume from '../components/Resume/Resume.tsx';

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
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);

export default router;
