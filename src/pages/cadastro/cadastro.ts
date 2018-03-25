import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http, RequestOptions, Headers } from '@angular/http';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  contato = {
    nome : '',
    telefone : '',
    email : ''
  };

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private http : Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cadastrarContato(){
    console.log("Cadastrando contato: " + this.contato.nome);
    console.log("Cadastrando contato: " + this.contato.telefone);
    console.log("Cadastrando contato: " + this.contato.email);

    let body = JSON.stringify(this.contato);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    this.http.post('http://localhost:3000/contatos', body, options)
        .map(res => res.json())
        .toPromise()
        .then(response => console.log(response));
    
    this.navCtrl.pop();
  }

}
