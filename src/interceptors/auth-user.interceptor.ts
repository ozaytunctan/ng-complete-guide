import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';


export class AuthUserInterceptor implements HttpInterceptor{

    
    intercept(req: HttpRequest<any>, next:HttpHandler) {
      console.log("send request"+req);
      const modifiedRequest=req.clone({
           headers:req.headers.append("Auth","1004")
      })

      return next.handle(modifiedRequest);
    }

}