import * as HomeActions from './home/home'
import * as common from './common/'

import * as AuthenticationActions from './authentication/authentication'
import * as DashboardAction from './dashboard/dashboard'

export const ActionCreators = Object.assign({},

    AuthenticationActions,
    common,
    HomeActions,
    DashboardAction
);
