import { theme } from "../src/theme";

/*

# CSS in JS
## Pro
- O próprio JS sinaliza erros de "tema" da sua app

##Contra
- JS rodando concorrendo com outros impactando na perfomance (https://web.dev/i18n/pt/vitals/)

*/

export default function Home() {
    return (
        <div>
            Clica aqui

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