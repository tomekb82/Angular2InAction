import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,LocationStrategy, HashLocationStrategy} from 'angular2/router';

import ApplicationComponent from 'app/components/application/application';
import RootComponent from 'app/components/application/application';

bootstrap(RootComponent, [ROUTER_PROVIDERS,provide(LocationStrategy, {useClass: HashLocationStrategy})]);
//bootstrap(ApplicationComponent, [ROUTER_PROVIDERS,provide(LocationStrategy, {useClass: HashLocationStrategy})]);




