import { Inter } from 'next/font/google'
import Head from 'next/head'
import Hero from '@/components/dispensarios/hero'
import Transforme from '@/components/dispensarios/transforme'
import Imagem from '@/components/dispensarios/imagem'
import ComoIniciarDispensarios from '@/components/dispensarios/comoIniciarDispensarios'
import BeneficiosDispensarios from '@/components/dispensarios/beneficiosDispensarios'
import KitsDispensarios from '@/components/dispensarios/kitsDispensarios'
import Produtos from '@/components/produtos'
import Anvisa from '@/components/dispensarios/anvisa'
import FormularioDispensarios from '@/components/dispensarios/formulariosDispensario'


const inter = Inter({ subsets: ['latin'] })

export default function Dispensarios() {
    return (
        <div>
            <Head>
                <title>Dispensarios</title>
                <meta name='description' content='Tratamento com Cannabis Medicinal' />
            </Head>
            <main
                className={` ${inter.className}`}
            >
                <Hero />
                <Transforme />
                <Imagem />
                <ComoIniciarDispensarios />
                <BeneficiosDispensarios />
                <KitsDispensarios />
                <Produtos />
                <Anvisa />
                <FormularioDispensarios />


            </main>
        </div>
    )
}
