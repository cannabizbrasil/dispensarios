import Image from 'next/image'

export default function Imagem() {
    return (
        <div >
            <Image
                src="/tabacaria.png"
                width={1920}
                height={1080}
                alt=""
                className="h-full w-full"
            />
        </div>
    )
}
