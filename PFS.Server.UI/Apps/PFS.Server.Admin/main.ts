/// <reference path="../../node_modules/@types/node/index.d.ts" />
/// <reference path="../../Contexts/JayDataContext.d.ts"/>

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);