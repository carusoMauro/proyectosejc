import { AfterViewInit, Component, OnInit } from "@angular/core";
import { WOW } from 'wowjs/dist/wow.min';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined", t } };


@Component({
  selector: 'app-contact-layout',
  templateUrl: './contact-layout.component.html',
  styleUrls: ['./contact-layout.component.css']
})
export class ContactLayoutComponent implements OnInit, AfterViewInit {

  constructor(private formBuilder: FormBuilder) {}

  formGroup: FormGroup;

  ngAfterViewInit(): void {
    new WOW().init();
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      subject: ['Consulta desde la web'],
      message: [null, Validators.required],
      phone: [null]

    })
  }


  submit() {
    if (this.formGroup.valid) {
      this.sendEmail();
    } else {
      alert('Debes completar los campos indicados con *');
    }


  }

  sendEmail() {
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'ventas@proyectosejc.com',
      Password: 'B8878B15689DD3DF36780632D6377FF0EEDA',
      To: 'ventas@proyectosejc.com',
      From: this.formGroup.get('email').value,
      Subject: this.formGroup.get('subject').value,
      Body: `
<i>Mensaje enviado desde la web proyectosejc.com</i> <br/> <b>Nombre: </b>${this.formGroup.get('name').value} <br /> <b>Email: </b>${this.formGroup.get('email').value}<br /> <b>Teléfono: </b>${this.formGroup.get('phone').value}<br /> <b>Mensaje:</b> <br /> ${this.formGroup.get('message').value} <br><br> <b>~Fin del mensaje.~</b> `
    }).then(message => {
      alert('Mensaje enviado correctamente, le responderemos a la brevedad');
      this.formGroup.reset();
    });
  }
}

