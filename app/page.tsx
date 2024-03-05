import cardStyles from "./card.module.css";

export default function Page() {
    return (
        <main>
            <div className={cardStyles.card}>
            <header>
            <h1>Teste suas Habilidades</h1>
            </header>
            <p>Esse é um jogo de perguntas e respostas.</p>
            <p>
                Formulario/Botão
            </p>
            <footer>
                Criado por @odiegosilva1
            </footer>
        </div>
        </main>

    )
  }