import React from 'react'
import ResponsiveSize from '../../../public/ResonsiveSize'
import { BoldText } from '../../../public/HeaderText'

export const CommentSection = () => {
    return (
        <div className='px-8'>
            <ResponsiveSize>
                <div className='text-center max-w-[540px] w-full mx-auto'>
                    <div className='py-8'>
                        <BoldText>Reviews</BoldText>
                        <p className='underline font-semibold'>“ Very good quality T-shirts and lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum! ”</p>
                    </div>
                    <div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly checked />
                        </div>
                        <p className='text-sm text-gray-500'>JANE OLIVER</p>
                    </div>
                </div>
            </ResponsiveSize>
        </div>
    )
}
