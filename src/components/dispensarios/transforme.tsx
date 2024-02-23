import { CalendarDaysIcon, CheckBadgeIcon, ClipboardDocumentCheckIcon, InboxIcon, ShoppingCartIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import BotaoComecarDispensarios from '@/components/dispensarios/botaoComecarDispensarios'

const features = [
    {
        name: 'Amplie seu negócio',
        description:
            'Ao se tornar um dispensário Loja Cannabis, você abrirá as portas para um novo segmento de clientes e ampliará sua base de consumidores. A demanda por produtos de cannabis está em constante crescimento, e essa é a oportunidade perfeita para expandir seus negócios e aumentar seus lucros.',
        href: '#',
        number: '01',
        button: 'Agende sua Consulta',
        icon: CalendarDaysIcon,
    },

    {
        name: 'Branding',
        description:
            'A Loja Cannabis é reconhecida como referência no mercado de cannabis medicinal. Ao associar sua tabacaria à nossa marca, você terá o respaldo de uma empresa renomada e confiável, conquistando a confiança dos consumidores e fortalecendo sua reputação no mercado.',
        href: '#',
        number: '03',
        button: 'Anvisa',
        icon: CheckBadgeIcon,
    },
    {
        name: 'Variedade de Opções',
        description:
            'A Loja Cannabis oferece um portfólio diversificado de produtos de alta qualidade, incluindo flores, extratos, comestíveis e produtos para cuidados pessoais. Você terá acesso a uma ampla gama de opções para atender às necessidades e preferências dos seus clientes, proporcionando uma experiência de compra completa.',
        href: '#',
        number: '04',
        button: 'Saiba onde comprar',
        icon: ShoppingCartIcon,
    },
    {
        name: 'Suporte e capacitação',
        description:
            'Estamos comprometidos em apoiar nossos parceiros dispensários com treinamentos, materiais educativos e suporte técnico. Você receberá orientações especializadas para auxiliar na gestão do seu negócio, além de acesso a informações atualizadas sobre regulamentações e tendências do mercado.',
        href: '#',
        number: '04',
        button: 'Saiba onde comprar',
        icon: ShoppingCartIcon,
    },
    {
        name: 'Marketing Estratégico',
        description:
            'Como parte do Grupo Cannabiz Brasil, você se beneficiará de uma estratégia de marketing abrangente, incluindo campanhas publicitárias, presença nas redes sociais e eventos promocionais. Aproveitaremos nossa expertise em marketing para impulsionar sua visibilidade e atrair novos clientes.',
        href: '#',
        number: '04',
        button: 'Saiba onde comprar',
        icon: ShoppingCartIcon,
    },
    {
        name: 'Kit Promocional',
        description:
            'Você irá receber um kit completo para iniciar o trabalhos no seu PDV com diversos materiais gráficos: Banner, Wooble, Adesivos, Totem, Portfólio impresso, totem de balcão, embalagens dos produtos para vitrine e muito mais.',
        href: '#',
        number: '04',
        button: 'Saiba onde comprar',
        icon: ShoppingCartIcon,
    },
]

export default function Transforme() {
    return (
        <div className="bg-green-50 py-16 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-green-800">COMECE AGORA</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Transforme sua tabacaria em um dispensário da Loja Cannabis e faça parte de uma rede de sucesso no mercado de cannabis..
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Seja um dispensário da Loja Cannabis e Inicie a sua Jornada no mercado da cannabis medicinal.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col border border-slate-200 hover:bg-green-100 hover:border-green-300 p-10 rounded-lg hover:scale-105 transition duration-700 ease-in-out">

                                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-700">
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>
                                <div className="flex items-center gap-x-3 text-2xl font-semibold leading-7 text-gray-900">
                                    {feature.name}
                                </div>
                                <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center py-16">

                    <BotaoComecarDispensarios />

                </div>
            </div>
        </div>
    )
}