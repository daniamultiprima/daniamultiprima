'use client'

export default function Loading() {
    return (
        <div role='status' className='w-full animate-pulse'>
            <div className='h-[80px] bg-gray-200 w-[100%] mb-4'></div> 
            <span className='sr-only'>Loading...</span>
        </div>
    );
}
