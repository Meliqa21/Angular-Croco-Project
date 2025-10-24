import { HttpInterceptorFn } from '@angular/common/http';
import { ApiService } from './api.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  let spinner = inject(ApiService)
  
  spinner.startLoader()
  return next(req).pipe( 
    finalize( () => {
      spinner.stopLoader()
    } )
  );
};
