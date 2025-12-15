'use client'

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

function GlobalError({ error }) {
    useEffect(() => {
        console.log(error)
    }, [])

    return (
        <html>
            <body>
                <div className="w-full h-[100dvh] flex flex-col items-center justify-center p-5">
                    <Image src="/images/broken.png" width={200} height={200} alt="Broken"/>
                    <h2 className="mt-10 font-bold mb-3 text-xl uppercase">Something went wrong!</h2>
                    <Link href="/home">
                        <button className="bg-blue-600 text-white w-[150px] h-[45px] font-bold rounded-lg uppercase">Back to Home</button>
                    </Link>
                </div>
            </body>
        </html>
    )
}

export default GlobalError
