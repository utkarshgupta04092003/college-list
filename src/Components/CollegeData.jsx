import React from 'react'
import { Link } from 'react-router-dom';

export default function CollegeData({ data }) {
    return (
        <tr>
            <td className='border border-slate-300'>#{data?._id}</td>
            <td className='border border-slate-300 flex-col p-3'>
                <div className=" flex">
                    <div className=" mr-3">
                        <img src={data?.collegeImage} alt="college image" className='w-[35px] h-[35px]' />
                    </div>
                    <div className='text-sm'>
                        <div className="text-lg font-semibold text-sky-500">{data?.collegeName}, {data?.address.city}</div>
                        <div className="">{data?.address.city}, {data?.address.state} |
                            <span className='ml-2'>

                                {data?.approval.length != 0 && (data?.approval.join(", "))} Approved
                            </span>
                        </div>
                        <div className='inline-block border-l rounded-r-full border-l-orange-400 px-3 my-2 bg-yellow-50'>
                            <div className='text-orange-400 font-semibold'>{data?.course[0].courseName}</div>
                            <span>JEE Advanced 2023 Cutoff: {data?.course[0].jeeCutOff}</span>
                        </div>
                    </div>

                </div>
                <div className="flex justify-between">
                    <div className='text-orange-400 font-semibold'>

                        <Link to={data?.applyUrl} >Apply now</Link>
                    </div>
                    <div className='text-highlighttext font-semibold'>

                        <Link to={data?.brochureUrl}>Download Brochure</Link>
                    </div>
                    <div><input type="checkbox" name="" id="" /><label className='ml-2'>Add to compare</label></div>
                </div>
            </td>
            <td className='border border-slate-300'>Fees</td>
            <td className='border border-slate-300'>Placement</td>
            <td className='border border-slate-300'>User Review</td>
            <td className='border border-slate-300'>Ranking</td>
            <td className='border border-slate-300'>-</td>
        </tr>
    )
}
