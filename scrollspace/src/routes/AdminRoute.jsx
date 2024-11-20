// Higher-order component for protected routes
const AdminRoute = ({ component: Component, ...rest }) => {
    const user = useSelector(state => state.user);
  
    return (
      <Route
        {...rest}
        render={props =>
          user && user.role === 'Admin' ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );
  };
  