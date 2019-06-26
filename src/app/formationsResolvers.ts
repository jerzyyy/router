import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
@Injectable()

export class FormationsResolvers implements Resolve<any> {
constructor() {
}


resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
return [{
title: 'Module Angular',
decription: '',
}, {
title: 'Module JavaScript',
decription: '',
}, {
title: 'Module TypeScript',
decription: '',
}];
}
}