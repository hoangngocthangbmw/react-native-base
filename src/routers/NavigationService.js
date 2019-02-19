import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function reset(routeName, params) {
    _navigator.dispatch(
        StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName, params})],
        })
    );
  }

  function pop() {
    _navigator.dispatch(
      NavigationActions.back()
    );
  }

export default {
    reset,
    navigate,
    setTopLevelNavigator,
    pop,
  };