import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the RemovePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remove',
  templateUrl: 'remove.html',
})
export class RemovePage {

	public id;
	public contato;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,
  			public alertCtrl: AlertController) {
  	this.contato = navParams.get('contatoSelecionado');
  	this.id = this.contato.id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemovePage');
    this.presentConfirm();
  }

  presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Confirmação',
    message: 'Você quer realmente excluir esse contato?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          this.navCtrl.pop();
        }
      },
      {
        text: 'Sim',
        handler: () => {
          console.log('Sim clicked');
           this.removeContato();
        }
      }
    ]
  });
  alert.present();
}

  removeContato () {
  	let body = JSON.stringify(this.contato);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    this.http.delete('http://192.168.0.6:3000/contatos/' + this.id, body, options)
        .map(res => res.json())
        .toPromise()
        .then(response => console.log(response));
    
    //this.navCtrl.push(HomePage);
    this.navCtrl.goToRoot(); //Vai pra página root e reinicia a pilha de páginas
  }
}
