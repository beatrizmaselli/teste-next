import { theme } from "../src/theme";
import Head from "next/head";

/*

# CSS in JS
## Pro
- O próprio JS sinaliza erros de "tema" da sua app

##Contra
- JS rodando concorrendo com outros impactando na perfomance (https://web.dev/i18n/pt/vitals/)

*/

function Button({children}) {
    return (
        <>
            <button>
                {children}
            </button>
            <style jsx>{`
                button {
                border: 1px solid darkgreen;
                background-color: ${theme.colors.primary[500]};
                padding: 8px 10px;
                font-weight: bold;
                font-family:'Oswald', sans-serif
                }
            `}
            </style>
        </>
    )
}

export default function Home() {
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>
                <title>
                    Bia - Site
                </title>
            </Head>
            Clica aqui

            <Button>
                Botão
                </Button>    
      
        </div>
    )
} 