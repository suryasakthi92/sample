import { AppNavigator } from '../../routing';
export const nav = (state, action) => {
    //Prevent navigating twice when clicking a button quickly
    if (action.type.startsWith('Navigation/')) {
        const {routeName} = action;
        const lastRoute = state.routes[state.routes.length - 1];
        if (routeName == lastRoute.routeName) return state
    }
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};
