# Basic SAM CDK Projen Example

Este projeto é um tutorial de como criar um projeto básico utilizando AWS-SAM, AWS-CDK e Projen para criar um App no ambiente da AWS

# Iniciando o projeto

A criação do projeto foi feita utilizando o Projen com o comando abaixo e iniciando o reposítorio git local e fazendo o primeiro commit e push
* projen new awscdk-app-ts
* git init
* git add .
* git commit -m "iniciando o projeto"
* git branch -M main
* git remote add origin git@github.com:marciocadev/basic-sam-cdk-projen-example.git
* git push -u origin main

# Alterando a versão do CDK e incluido bibliotecas

O arquivo *.projenrc.js* é utilizado para alterar as configurações básicas do projeto, para incluir as bibliotecas necessárias do CDK incluiremos no campo cdkDependencies
```
...
cdkVersion: '1.130.0',
cdkDependencies: ['@aws-cdk/aws-lambda']
```