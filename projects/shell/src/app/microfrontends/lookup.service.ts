
import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<Microfrontend[]> {
        return Promise.resolve([  
            {
                
                type: 'module',
                remoteEntry: 'http://localhost:4200/remoteEntry.js',
                exposedModule: './Module',

                // For Routing
                displayName: 'Bulk-IMEI-Tool',
                routePath: 'Bulk-IMEI-Tool',
                ngModuleName: 'LoginModule'
            },
            {
                
                type: 'module',
                remoteEntry: 'http://localhost:4000/remoteEntry.js',
                exposedModule: './Module',

                // For Routing
                displayName: 'IMEI-Tool',
                routePath: 'IMEI-Tool',
                ngModuleName: 'BlockUnblockModule'
            }
           
        ] as Microfrontend[]);
    }
}
