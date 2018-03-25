import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EdicaoPage } from '../edicao/edicao';

@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html'
})

export class ContatoPage {

  public contato;
  public id;

  constructor(public navParams: NavParams, public navCtrl: NavController, private http: Http) {

    this.contato = navParams.get('contatoSelecionado');
    
  }


  editaContato(){
    console.log('Editando contato ...');
    this.navCtrl.push(EdicaoPage, { contatoSelecionado : this.contato });
  }
}
