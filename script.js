"use strict";

const botao = document.getElementById("mostrarBtn");
const filtroAno = document.getElementById("filtroAno");
const status = document.getElementById("status");
const dados = document.getElementById("dados");
const referencias = document.getElementById("referencias");

const eventos = [
    {
        ano: 1824,
        titulo: "Joseph Fourier estuda o efeito estufa",
        texto: "Joseph Fourier explica que a atmosfera ajuda a manter a Terra mais quente do que seria sem esse efeito.",
        fonte: "NASA — evidências das mudanças climáticas",
        url: "https://science.nasa.gov/climate-change/evidence/"
    },
    {
        ano: 1856,
        titulo: "Experimentos de Eunice Foote",
        texto: "Eunice Foote apresenta experimentos indicando que gases como o dióxido de carbono absorvem calor.",
        fonte: "NASA — evidências das mudanças climáticas",
        url: "https://science.nasa.gov/climate-change/evidence/"
    },
    {
        ano: 1861,
        titulo: "Pesquisas de John Tyndall",
        texto: "John Tyndall investiga como gases atmosféricos absorvem radiação térmica, ajudando a explicar o efeito estufa.",
        fonte: "NASA — evidências das mudanças climáticas",
        url: "https://science.nasa.gov/climate-change/evidence/"
    },
    {
        ano: 1896,
        titulo: "Cálculos de Svante Arrhenius",
        texto: "Arrhenius publica cálculos sobre como mudanças na concentração de CO₂ podem influenciar a temperatura da Terra.",
        fonte: "NASA — evidências das mudanças climáticas",
        url: "https://science.nasa.gov/climate-change/evidence/"
    },
    {
        ano: 1938,
        titulo: "Estudos de Guy Callendar",
        texto: "Guy Callendar reúne medições de temperatura e estimativas de CO₂, defendendo que as emissões humanas contribuem para o aquecimento.",
        fonte: "NASA — evidências das mudanças climáticas",
        url: "https://science.nasa.gov/climate-change/evidence/"
    },
    {
        ano: 1958,
        titulo: "Medições de CO₂ em Mauna Loa",
        texto: "Charles David Keeling inicia medições sistemáticas de CO₂ atmosférico no Havaí, ajudando a documentar sua elevação.",
        fonte: "NOAA — história da ciência climática",
        url: "https://www.noaa.gov/heritage/stories/five-significant-moments-in-climate-science-history"
    },
    {
        ano: 1988,
        titulo: "Criação do IPCC",
        texto: "É criado o painel internacional responsável por avaliar as pesquisas científicas sobre mudanças climáticas.",
        fonte: "IPCC — site oficial",
        url: "https://www.ipcc.ch/"
    },
    {
        ano: 1992,
        titulo: "Convenção do Clima da ONU",
        texto: "Na Conferência do Rio, países abrem para assinatura uma convenção internacional de cooperação sobre mudanças climáticas.",
        fonte: "Convenção do Clima da ONU",
        url: "https://unfccc.int/"
    },
    {
        ano: 1997,
        titulo: "Protocolo de Kyoto",
        texto: "Países adotam um acordo internacional que estabeleceu metas de redução de emissões para determinados países desenvolvidos.",
        fonte: "UNFCCC — Protocolo de Kyoto",
        url: "https://unfccc.int/kyoto_protocol"
    },
    {
        ano: 2015,
        titulo: "Acordo de Paris",
        texto: "Países adotam um acordo internacional para limitar o aquecimento global e fortalecer as ações climáticas.",
        fonte: "UNFCCC — Acordo de Paris",
        url: "https://unfccc.int/process-and-meetings/the-paris-agreement"
    }
];

botao.addEventListener("click", mostrarEventos);
filtroAno.addEventListener("change", mostrarEventos);

// Mostra os eventos automaticamente ao abrir a página.
mostrarEventos();

function mostrarEventos() {
    dados.replaceChildren();
    referencias.replaceChildren();

    const periodo = filtroAno.value;

    const eventosFiltrados = eventos.filter(evento => {
        if (periodo === "todos") return true;

        const inicio = Number(periodo);

        if (inicio === 2000) {
            return evento.ano >= 2000;
        }

        return evento.ano >= inicio && evento.ano < inicio + 100;
    });

    if (eventosFiltrados.length === 0) {
        status.textContent = "Nenhum evento encontrado nesse período.";
        return;
    }

    eventosFiltrados.forEach(evento => {
        const cartao = document.createElement("article");
        cartao.className = "resultado";

        const ano = document.createElement("span");
        ano.className = "ano";
        ano.textContent = evento.ano;

        const titulo = document.createElement("h3");
        titulo.textContent = evento.titulo;

        const texto = document.createElement("p");
        texto.textContent = evento.texto;

        cartao.append(ano, titulo, texto);
        dados.appendChild(cartao);

        adicionarFonte(
            `${evento.ano} — ${evento.fonte}`,
            evento.url
        );
    });

    status.textContent =
        `${eventosFiltrados.length} evento(s) encontrado(s).`;
}

function adicionarFonte(titulo, url) {
    const paragrafo = document.createElement("p");
    const link = document.createElement("a");

    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = titulo;

    paragrafo.appendChild(link);
    referencias.appendChild(paragrafo);
}