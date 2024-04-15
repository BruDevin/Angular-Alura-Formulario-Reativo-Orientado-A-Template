import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../services/consulta-cep.service';
import { Endereco } from '../interfaces/endereco';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private consultaCepService: ConsultaCepService) { }

  ngOnInit(): void {}

  consultaCep(cep: string, form: NgForm) {
    if(cep !== '') {
      this.consultaCepService.getConsultaCep(cep).subscribe(resultado => {
        console.log(resultado)
        this.popularEndereco(resultado, form)
      })}
    return 
  }

  popularEndereco(dados: Endereco, form: NgForm) {
    form.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }

  cadastrar(form : NgForm){
    console.log(form);
    if(form.valid){
      this.router.navigate(['sucesso']);
      console.log('Formulário enviado');
    }else{
      console.log('Formulário inválido');
    }
  }

}
