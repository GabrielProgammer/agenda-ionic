import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';

/**
 * Generated class for the EdicaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edicao',
  templateUrl: 'edicao.html',
})
export class EdicaoPage {

	public contato;
	public id;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : Http) {
  	this.contato = navParams.get('contatoSelecionado');
  	this.id = this.contato.id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdicaoPage');
  }

  cadastrarContato(){
    console.log("Cadastrando contato: " + this.contato.nome);
    console.log("Cadastrando contato: " + this.contato.telefone);
    console.log("Cadastrando contato: " + this.contato.email);

    let body = JSON.stringify(this.contato);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    this.http.put('http://192.168.0.5:3000/contatos/' + this.id, body, options)
        .map(res => res.json())
        .toPromise()
        .then(response => console.log(response));
    
    this.navCtrl.pop();
  }

}
