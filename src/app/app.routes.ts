import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LOGINREGISTERCLIENTComponent } from './login-register-client/login-register-client.component';
import { CATALOGOMARCADORESCLIENTEComponent } from './catalogo-marcadores-cliente/catalogo-marcadores-cliente.component';
import { CATALOGOCLIENTComponent } from './catalogo-client/catalogo-client.component';
import { CATALOGOFUNCIONARIOComponent } from './catalogo-funcionario/catalogo-funcionario.component';
import { CARRINHOCOMPRASCLIENTEComponent } from './carrinho-compras-cliente/carrinho-compras-cliente.component';
import { CONTABILIDADEFUNCIONARIOComponent } from './contabilidade-funcionario/contabilidade-funcionario.component';
import { GERENCIAMENTOFUNCIONARIOSComponent } from './gerenciamento-funcionarios/gerenciamento-funcionarios.component';
import { METRICASGERENTEComponent } from './metricas-gerente/metricas-gerente.component';
import { GERENCIAMENTOVALORESComponent } from './gerenciamento-valores/gerenciamento-valores.component';
import { CATALOGOSEARCHComponent } from './catalogo-search/catalogo-search.component';

export const routes: Routes = [
    // FUNCIONANDO E TESTADO
    {path:"", component:CATALOGOMARCADORESCLIENTEComponent},
    {path:"Catalogo", component:CATALOGOCLIENTComponent},
    {path:"Search",component:CATALOGOSEARCHComponent},

    // FALTA TESTAR
    {path:"Login_Register", component:LOGINREGISTERCLIENTComponent},


    // NÃO FUNCIONANDO

    {path:"Armazem", component:CATALOGOFUNCIONARIOComponent},
    {path:"Contabil", component:CONTABILIDADEFUNCIONARIOComponent},
    {path:"Carrinho", component:CARRINHOCOMPRASCLIENTEComponent},
    {path:"Funcionario", component:GERENCIAMENTOFUNCIONARIOSComponent},
    {path:"Metricas", component:METRICASGERENTEComponent},
    {path:"Valores", component:GERENCIAMENTOVALORESComponent},
];
