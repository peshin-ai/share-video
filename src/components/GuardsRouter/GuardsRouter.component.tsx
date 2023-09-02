import { Navigate } from 'react-router-dom';

export type GuardsRouterProps = {
  children: React.ReactNode;
  accessToken?: string;
};

export const GuardsRouter = (props: GuardsRouterProps) => {
  const { children, accessToken } = props;

  if (!accessToken) {
    return <Navigate to="/home" replace />;
  }

  return <>{children}</>;
};
