'use client'

import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'

const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  let [scaled, scale] = useState(2);
  let [positioned, position] = useState([0, -1.6, 0]);
  let [rotationed, rotation] = useState([0.0, -0.3, 0]);
  return (
    <div>
      <div className='grid size-full grid-cols-3 gap-4'>
        <div className="col-span-2 bg-slate-900">
          <div className='relative h-screen w-full'>
            <View orbit className='relative h-screen w-full'>
              <Suspense fallback={null}>
                <Dog scale={scaled} position={positioned} rotation={rotationed} />
                <Common color={'lightpink'} />
              </Suspense>
            </View>
          </div>
        </div>
        <div className='bg-slate-400'>
          <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
            <div className="mesh-parent">

            </div>
            <div className="mesh-child-0">

            </div>
            <div className="mesh-child-1">

            </div>
            <div className="group-0">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
