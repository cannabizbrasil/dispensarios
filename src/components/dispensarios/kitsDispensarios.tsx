import Image from 'next/image'
import BotaoComecarDispensarios from '@/components/dispensarios/botaoComecarDispensarios'

const products = [
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: '/acrilico-mockup.png',

    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: '/wooble.png',

    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: '/banner-mockup-1.png',

    },

]

export default function KitsDispensarios() {
    return (
        <div className="bg-white py-4 sm:py-6">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-green-800">DIVULGAÇÃO</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Kit Dispensários
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Wooble, totem, banner e mais.
                    </p>
                </div>
                <div

                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                >
                    {products.map((product) => (
                        <div key={product.name}>
                            <Image
                                className="rounded-2xl"
                                src={product.imageUrl}
                                width={400}
                                height={400}
                                alt=""
                            />

                        </div>
                    ))}
                </div>
                <div className="flex justify-center py-16">

                    <BotaoComecarDispensarios />

                </div>
            </div>
        </div>
    )
}
