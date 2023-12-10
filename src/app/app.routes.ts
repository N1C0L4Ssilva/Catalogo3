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
import { REGISTRARComponent } from './registrar/registrar.component';

export const routes: Routes = [
    // PROGRAMADO

    // FUNCIONANDO E TESTADO
    {path:"RegistrarItem", component:REGISTRARComponent},
    
    // FALTA TESTAR
    {path:"", component:CATALOGOMARCADORESCLIENTEComponent},
    {path:"Catalogo", component:CATALOGOCLIENTComponent},
    {path:"Search",component:CATALOGOSEARCHComponent},
    {path:"Login_Register", component:LOGINREGISTERCLIENTComponent},

    // NÃO FUNCIONANDO
    {path:"Contabil", component:CONTABILIDADEFUNCIONARIOComponent},
    {path:"Armazem", component:CATALOGOFUNCIONARIOComponent},
    {path:"Carrinho", component:CARRINHOCOMPRASCLIENTEComponent},
    {path:"Funcionario", component:GERENCIAMENTOFUNCIONARIOSComponent},
    {path:"Metricas", component:METRICASGERENTEComponent},
    {path:"Valores", component:GERENCIAMENTOVALORESComponent},
];
