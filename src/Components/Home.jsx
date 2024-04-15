import React from 'react'
import CollegeData from './CollegeData'
// import { collegeData } from '../data/collegeData'

export default function Home({collegeData}) {
    return (
        <div>
            <table className=' border border-collapse m-5 p-2'>
                <caption class="caption-top">
                    Filtered Results
                </caption>
                <thead>
                    <th className='border border-slate-300 p-2 text-white font-semibold bg-headbg text-lg '>CD Rank</th>
                    <th className='border border-slate-300 p-2 text-white font-semibold bg-headbg text-lg'>Colleges</th>
                    <th className='border border-slate-300 p-2 text-white font-semibold bg-headbg text-lg'>Fees</th>
                    <th className='border border-slate-300 p-2 text-white font-semibold bg-headbg text-lg'>Placement</th>
                    <th className='border border-slate-300 p-2 text-white font-semibold bg-headbg text-lg'>User Review</th>
                    <th className='border border-slate-300 p-2 text-white font-semibold bg-headbg text-lg'>Ranking</th>
                </thead>

                <tbody className=''>
                    {collegeData?.map((college, index)=>(
                        <CollegeData data={college} key={index} />

                    ))}

                </tbody>
            </table>
        </div>
    )
}
