import Link from "next/link"
import Image from "next/image"

function NotFound() {
    return (
        <div className="w-full h-[100dvh] flex flex-col items-center justify-center p-5">
            <Image src="/images/404.png" width={450} height={450} alt="Not Found"/>
            <Link href="/home">
                <button className="bg-blue-600 text-white w-[170px] h-[45px] font-bold rounded-lg uppercase">Back to Home</button>
            </Link>
        </div>
    )
}

export default NotFound
