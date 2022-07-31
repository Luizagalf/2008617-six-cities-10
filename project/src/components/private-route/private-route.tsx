import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: boolean;
  children: JSX.Element;
};

const PrivateRoute = ({
  authorizationStatus,
  children
}: PrivateRouteProps): JSX.Element =>
  authorizationStatus ? children : <Navigate to="/login" />;

export default PrivateRoute;
