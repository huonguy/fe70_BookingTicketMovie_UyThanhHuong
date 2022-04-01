import { Route } from "react-router-dom";

export const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            <header>Day la header</header>
            <Component {...propsRoute} />
            <footer>Day la footer</footer>
          </>
        );
      }}
    />
  );
};
