// @flow
import Loadable from 'react-loadable';
import { LoadingComponent } from 'components/Loader';

export default function routeLoader(component: Function) {
  return Loadable({
    loader: component,
    loading: LoadingComponent,
    delay: 50
  });
}
