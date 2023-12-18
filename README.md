# LinkLab Challenge

## Descrição

O LinkLab Challenge é um projeto desenvolvido para demonstrar habilidades técnicas nas competências requeridas para a vaga de freelancer. O projeto consiste em um cliente construído em Next.js 14, utilizando as bibliotecas react-query v3.39.3 e sass v1.69.5. O servidor é construído seguindo os princípios de DDD (Domain-Driven Design) e programação orientada a objeto, utilizando as bibliotecas @prisma/client v5.7.0, express v4.18.2, zod v3.22.4 e cors v2.8.5.

## Configuração do Front-end

Para configurar o front-end, siga as instruções abaixo:

1. **Instale as dependências:**
    ```bash
    npm install
    ```

2. **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

3. Acesse o aplicativo em [http://localhost:3000](http://localhost:3000)

## Configuração do Back-end

Para configurar o back-end, siga as instruções abaixo:

1. **Instale as dependências:**
    ```bash
    npm install
    ```

2. **Configuração do Banco de Dados com Docker Compose:**
    - Certifique-se de ter o Docker e o Docker Compose instalados.
    - Execute o seguinte comando para criar e configurar o banco de dados, executar as migrações e seeds:
      ```bash
      docker-compose up
      ```

    Isso iniciará o banco de dados e executará as migrações e seeds automaticamente.

3. **Inicie o servidor:**
    ```bash
    npm start
    ```

4. O servidor estará disponível em [http://localhost:3333](http://localhost:3333)

### Nota: Ambiente de Desenvolvimento

- Durante o desenvolvimento, você pode usar o seguinte comando para executar as migrações e seeds separadamente:
    ```bash
    npx prisma migrate dev
    npx prisma db seed
    ```
- Utilize a DATABASE_URL presente no arquivo .env.example no seu arquivo .env.

## Requisitos do Sistema

Certifique-se de ter o Node.js e o Docker instalados na sua máquina.

## Contribuição

Se deseja contribuir para o projeto, siga estas etapas:

1. Faça um fork do projeto.
2. Crie um branch para a sua feature (`git checkout -b feature/sua-feature`).
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Faça push para o branch (`git push origin feature/sua-feature`).
5. Abra um Pull Request.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).
