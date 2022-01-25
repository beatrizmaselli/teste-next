import { theme } from "../src/theme";

export default function Home() {
    return (
        <div>
            Pedacinho de tela

            <button className="button">
                Botão
            </button>

        <style>
            {`
                .button{
                    border: 2px solid darkgreen;
                    background-color: ${theme.colors.primary[500]};
                    padding: 8px 10px
                }
            `}
        </style>
        </div>
    )
} 