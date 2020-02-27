// import { Injectable } from '@angular/core';
// import { HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { catchError } from "rxjs/operators";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ElasticEmailService {
//
//   constructor(
//     private http: HttpClient) {
//   }
//   /** POST: add a new hero to the database */
//   sendEmail (emailParams: any): void {
//     return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
//       .pipe(
//         catchError(this.handleError('addHero', hero))
//       );
//   }
//   $scope.EmailClick = function(){
//     Email.send($scope.emailEmail,
//       "matiasolaldeolmos@gmail.com",
//       "Consulta pagina - Nombre: " + $scope.nameEmail + ", Telefono: "+ $scope.phoneEmail,//message
//       $scope.messageEmail,
//       "smtp.elasticemail.com",
//       "matiasolaldeolmos@gmail.com",
//       "eb4e4d75-e39b-4cd0-a8da-0eedadf3fa4e");
//     $scope.nameEmail = "";
//     $scope.phoneEmail = "";
//     $scope.messageEmail = "";
//     $scope.emailEmail = "";
//     $scope.emailSent = true;
//     setTimeout(function(){
//       document.body.scrollTop = 0;
//       document.documentElement.scrollTop = 0;
//       location.reload();
//     }, 3000); };
// }
