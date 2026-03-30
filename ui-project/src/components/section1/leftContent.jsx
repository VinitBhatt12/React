import { ArrowRight } from 'lucide-react';

import { MoveUpRight } from 'lucide-react';
function LeftContent(){
    return(
        <div className="h-full w-1/3 flex flex-col justify-between">
            <div className='p-5 '>
                <h3 className="mb-7 text-5xl font-bold"> Prospective <br /> <span> Customer </span> <br />Segmentation</h3>
                <p className="text-1xl font-medium text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eius ea nesciunt repellat </p>
            </div>
            <div className='p-5'>
                <MoveUpRight size={40} />
            </div>
        </div>
    )
}

export default LeftContent;