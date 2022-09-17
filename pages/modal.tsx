import { a,useTransition } from '@react-spring/web';
import React, { ReactElement, useState } from 'react'


import dynamic from 'next/dynamic'

const Portal = dynamic(()=> import("../components/Portal"), {ssr: false})



export default function Page(){
    const [show,setShow] = useState(false)
    console.log(show)

    return <div>
    <Modal show={show} closeModal={()=>setShow(false)}/>
    <button onClick={()=>setShow(true)}>Click me</button>
    </div>
}


Page.getLayout = function getLayout(page: ReactElement) {
    return page;
  };

const Modal = ({show, closeModal}: {show: boolean, closeModal: VoidFunction})=> {
    const modalTransition = useTransition(show, {
        delay: 2,
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0}
    })

    console.log(show)
    return <Portal>
    <div>
        {modalTransition(({opacity}, item)=>(
            item &&
<>
<a.div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30"style={{opacity}} onClick={closeModal}>
I am here 
</a.div>
<a.div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-lg -translate-x-1/2 -translate-y-1/2"style={{opacity}}>
I am here
</a.div>
    
</> 
        ))}
    </div>
</Portal>
}



Modal.getLayout = function getLayout(page: ReactElement) {
    return page;
  };



