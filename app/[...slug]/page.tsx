// app/[...slug]/page.tsx
import { FC } from 'react';
import DefaultLayout from '../defaultLayout/layout';

interface CatchAllRouteProps {
  params: {
    slug: string[];
  };
}

const CatchAllRoute: FC<CatchAllRouteProps> = ({ params }) => {
  return (
    <DefaultLayout>
      <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      <p>
        The page <code>{params.slug.join("/")}</code> does not exist.
      </p>
    </DefaultLayout>
  );
};

export default CatchAllRoute;