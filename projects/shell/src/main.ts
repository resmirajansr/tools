import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
    loadRemoteEntry({ type: 'module', remoteEntry: 'http://localhost:4200/remoteEntry.js'}),
    loadRemoteEntry({ type: 'module', remoteEntry: 'http://localhost:4000/remoteEntry.js'})
])
.then(() => import('./bootstrap'))
.catch(err => console.error('error', err));

