import React from 'react'
import { Link } from 'react-router-dom';
import { imageUrl } from '../data/collegeData';

export default function CollegeData({ data }) {
    return (


        <tr className={data?.isFeatured ? 'bg-[#fff2ea]' : ''}>

            {/* id section */}
            <td className={`align-top border border-slate-300 min-w-[7vw] p-2`}>#{data?._id}</td>

            {/* college details section */}
            <td className='align-top border border-slate-300 flex-col p-3 relative'>

                <div className={data?.isFeatured ? `ribbon` : 'hidden'}>
                    <span className="ribbon1"><span>Featured</span></span>
                </div>
                <div className=" flex">
                    <div className=" mr-3">
                        <img src={data?.collegeImage} alt="college image" className='w-[35px] h-[35px] rounded-full' />
                    </div>
                    <div className='text-xs'>
                        <div className="text-lg font-semibold text-sky-500">{data?.collegeName}, {data?.address.city}</div>
                        <div>{data?.address.city}, {data?.address.state} |
                            <span className='ml-2'>

                                {data?.approval.length != 0 && (data?.approval.join(", "))} Approved
                            </span>
                        </div>
                        <div className={ data?.isFeatured ? 'hidden': `inline-block border-l rounded-r-full border-l-orange-400 px-3 my-2 bg-yellow-50`}>
                            <div className='text-orange-400 font-semibold'>{data?.course[0].courseName}</div>
                            <span>JEE Advanced 2023 Cutoff: {data?.course[0].jeeCutOff}</span>
                        </div>
                    </div>

                </div>
                <div className="flex justify-between my-2">
                    <div className='text-orange-400 font-semibold flex items-center'>
                        <img src={'/src/assets/right-arrow.png'} alt="download image" className='w-3 h-3 mr-1' />

                        <Link to={data?.applyUrl} >Apply now</Link>
                    </div>
                    <div className='text-highlighttext font-semibold flex items-center '>
                        <img src={'/src/assets/download.png'} alt="download image" className='w-4 h-4 mr-1' />
                        <Link to={data?.brochureUrl}>Download Brochure</Link>
                    </div>
                    <div><input type="checkbox" name="" id="" /><label className='ml-2'>Add to compare</label></div>
                </div>
            </td>

            {/* fees section */}
            <td className='align-top border border-slate-300 flex-col pl-2 min-w-[12vw]'>
                <div className='text-textimp font-semibold'>₹ {data?.courseDetails[0].amount}</div>
                <div className='text-xs'>{data?.courseDetails[0].courseName}</div>
                <div className='text-xs'> - {data?.courseDetails[0].courseYear} Year Fees</div>
                <div className='flex items-center text-orange-400 text-xs'>
                    <img src={'/src/assets/exchange.png'} alt="compare fees" className='w-5 h-5 mr-1' />
                    <span>Compare Fees</span>
                </div>
            </td>

            {/* placement section */}
            <td className='align-top border border-slate-300 pl-2 min-w-[12vw]'>
                <div className='text-textimp font-semibold'>₹ {data?.placement.averagePackage}</div>
                <div className='text-xs'>Average Package</div>
                <div className='text-textimp font-semibold'>₹ {data?.placement.highestPackage}</div>
                <div className='text-xs'>Highest Package</div>
                <div className='flex items-center text-orange-400 text-xs'>
                    <img src={'/src/assets/exchange.png'} alt="compare fees" className='w-5 h-5 mr-1' />
                    <span>Compare Placement</span>
                </div>
            </td>
            
            {/* user review section */}
            <td className='align-top border border-slate-300 pl-2'>
                <div className='flex items-center'>
                    <p className="w-2 h-2 rounded-full bg-orange-400 mr-1"></p>
                    <span>{data?.review.rating} / {data?.review.maxRating}</span></div>
                <div className='text-xs'>
                    Based on {data?.review.ratingCount} User
                </div>
                <div className='text-xs'>Reviews</div>
                <div className='inline-flex items-center text-pink-500 text-xs bg-yellow-100 rounded-full p-0.5 px-1'>
                    <img src={'/src/assets/mark.png'} alt="mark icon" className='w-3 h-3 mr-1' />
                    <p>{data?.review.reviewMessage}</p>
                    <img src={'/src/assets/down-arrow.png'} alt="mark icon" className='w-3 h-3 ml-1' />
                </div>
            </td>

            {/* ranking section */}
            <td className='align-top border border-slate-300 pl-2 min-w-[15vw]'>
                <div>#{data?.ranking[0].rank}<sup>{data?.ranking[0].rank == 1 ? 'st' : data?.ranking[0].rank == 2 ? "nd" : data?.ranking[0].rank == 3 ? "rd" : "th"}</sup>/<span className='text-orange-500'>{data?.ranking[0].totalRanking}</span> in
                    <span> {data?.ranking[0].rankingField}</span></div>
                <div className='flex'><img src={data?.ranking[0].fieldImageUrl} alt="" className='w-10 mr-1' />{data?.ranking[0].year}</div>

                <div className='bg-sky-100 text-sky-500 p-1 inline-flex items-center my-1  border-l border-l-blue-500 rounded-r-full'>
                    <div className='flex'>
                        <img src={imageUrl?.nirf} alt="" className='bg-white rounded-full p-1' />
                        <img src={imageUrl?.india_today} alt="" className='bg-white rounded-full p-1 relative -left-3' />
                        <img src={imageUrl?.aicte} alt="" className='bg-white rounded-full p-1 relative -left-6' />
                    </div>
                    <div className='relative -left-4'>
                        +{data?.ranking.length} more
                    </div>
                </div>
            </td>
        </tr>


    )
}
