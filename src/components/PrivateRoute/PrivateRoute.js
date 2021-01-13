import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import TokenService from '../../services/token-service'

export default function PrivateRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        <UserContext.Consumer>
          {userContext =>
            TokenService.hasAuthToken()
              ? <Component {...componentProps} />
              : (
                <Redirect
                  to={{
                    pathname: userContext.user.idle ? '/login' : '/register',
                    state: { from: componentProps.location },
                  }}
                />
              )
          }
        </UserContext.Consumer>
      )}
    />
  )
}
