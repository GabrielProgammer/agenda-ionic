import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EdicaoPage } from '../edicao/edicao';
import { RemovePage } from '../remove/remove';

@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html'
})

export class ContatoPage {

  public contato;
  public id;

  constructor(public navParams: NavParams, public navCtrl: NavController) {

    this.contato = navParams.get('contatoSelecionado');
    
  }


  editaContato(){
    console.log('Editando contato ...');
    this.navCtrl.push(EdicaoPage, { contatoSelecionado : this.contato });
  }

  removeContato(){
    console.log('Removendo contato ...');
    this.navCtrl.push(RemovePage, { contatoSelecionado : this.contato });
  }
}
