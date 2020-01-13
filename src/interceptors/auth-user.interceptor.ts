import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';


export class AuthUserInterceptor implements HttpInterceptor{

  /**
   * Giden istekleri değiştirip gönderiyor.
   * @param req 
   * @param next 
   */
    intercept(req: HttpRequest<any>, next:HttpHandler) {
      const modifiedRequest=req.clone({
           headers:req.headers.append("Auth","1004")
      })
      return next.handle(modifiedRequest);
    }

}