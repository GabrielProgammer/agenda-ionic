import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import {ContatoPage}  from '../contato/contato'
import { CadastroPage } from '../cadastro/cadastro';
import {LoadingController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contatos = [];
  private load;
  /*[
    {'nome' : 'Ana', 'telefone' : '988397858', 'email' : 'ana@gmail.com'},
    {'nome' : 'João', 'telefone' : '988397858', 'email' : 'joao@gmail.com'},
    {'nome' : 'Maria', 'telefone' : '988397858', 'email' : 'maria@gmail.com'}
  ];*/

    constructor(public navCtrl: NavController, private http : Http, 
                private loader: LoadingController, private alertCtrl: AlertController) {
        this.load = this.loader.create({
        content: "Buscando contatos. Aguarde....",
    });

    this.load.present();
  }

  ionViewWillEnter(){
    this.obterContatosAPI();
  }

  selecionaContato(x) {
    console.log(x.nome);
    this.navCtrl.push(ContatoPage, { contatoSelecionado : x } );
  }

  adicionaContato(){
    console.log('Adicionando contato ...');
    this.navCtrl.push(CadastroPage);
  }

    obterContatosAPI() {
    this.http.get('http://192.168.0.6:3000/contatos')
        .map(response => response.json())
        .toPromise()
        .then(
            response => {
                this.contatos = response;
                this.load.dismiss();
            },

            err => {
                this.load.dismiss();
                this.alertCtrl.create({
                    title: 'Falha na conexão',
                    buttons: [{ text: 'Estou ciente' }],
                    subTitle: 'Não foi possível obter a lista de contatos. Tente mais tarde.'
                }).present();
            });
  }

}
