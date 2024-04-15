import React from 'react'
import CollegeData from './CollegeData'
import { collegeData } from '../data/collegeData'

export default function Home() {
    return (
        <div>
            <table className='table-auto border border-collapse w-full p-2'>
                {/* <caption class="caption-top">
                    Table 3.1: Professional wrestlers and their signature moves.
                </caption> */}
                <thead>
                    <th className='border border-slate-300 p-2 text-white font-semibold bg-headbg text-lg '>#</th>
                    <th className='border border-slate-300 p-2 text-white font-semibold bg-headbg text-lg'>Colleges</th>
                    <th className='border border-slate-300 p-2 text-white font-semibold bg-headbg text-lg'>Fees</th>
                    <th className='border border-slate-300 p-2 text-white font-semibold bg-headbg text-lg'>Placement</th>
                    <th className='border border-slate-300 p-2 text-white font-semibold bg-headbg text-lg'>User Review</th>
                    <th className='border border-slate-300 p-2 text-white font-semibold bg-headbg text-lg'>Ranking</th>
                    <th className='border border-slate-300 p-2 text-white font-semibold bg-headbg text-lg'></th>
                </thead>

                <tbody>
                    {collegeData?.map((college, index)=>(
                        <CollegeData data={college} key={college?._id} />

                    ))}

                </tbody>
            </table>
        </div>
    )
}
