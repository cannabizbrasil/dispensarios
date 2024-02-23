import Image from 'next/image'


export default function Anvisa() {


    return (
        <div className="bg-white">

            <div>
                <div className="mx-auto max-w-7xl px-6 py-12 sm:py-18 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-18">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                        <div className="flex">
                        </div>
                        <h2 className="mt-10 max-w-lg text-5xl font-bold tracking-tight text-green-700">
                            Todos os produtos são autorizados pela RDC número 660 da ANVISA.
                        </h2>

                    </div>
                    <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                        <Image

                            width={700}
                            height={700}
                            src="/mockup-anvisa-2.png" alt="" />

                    </div>
                </div>
            </div>
        </div >
    )
}
