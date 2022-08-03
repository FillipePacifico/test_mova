Feature: Efetuar Busca No DuckDuckGo

    Como usuário, desejo efetuar uma Busca
    para obter as últimas notícias sobre Bitcoin

    Scenario: Busca utilizando Enter
        Given acesso o site
        When digito a palavra Bitcoin na pesquisa
        And aperto a tecla Enter
        Then devo visualizar mais que 10 resultados na busca

    Scenario: Busca utilizando a Lupa
        Given acesso o site
        When digito a palavra Bitcoin na pesquisa
        And clico no ícone Lupa
        Then devo visualizar mais que 10 resultados na busca

    Scenario: Busca utilizando a formulário
        Given acesso o site
        When seleciono o formulário pra pesquisa
        And submeto o formulário
        Then devo visualizar mais que 10 resultados na busca