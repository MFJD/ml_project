'use client'
import Button from '@/components/buttons'
import { useState } from 'react'

function Buttons() {
    const [active, setActive] = useState<boolean>(false)
    const handleSubmit =() =>{
        alert('Hello world')
    }
    return (
        <div className='flex h-12 space-x-3'>
            <Button
                text={'Input Fields'}
                type={'submit'}
                width='full'
                onClick={
                    ()=>handleSubmit()
                }
            />
            <Button
                text={'Upload CSV'}
                type={'submit'}
                onClick={
                    ()=>handleSubmit()
                }
            />
        </div>
    )
}
export default Buttons