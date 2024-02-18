import { fetchResident } from '@/actions/fetch-residents'
import BackButton from '@/app/components/ui/BackButton'
import NoteList from '@/app/components/ui/NoteList'
import { Resident } from '@/app/models/ResidentData'
import React, { useState } from 'react'

const UserDetails = async ({ searchParams }: {
  searchParams: {
    userId: string
  }
}) => {

  const resident: Resident | null = await fetchResident(searchParams.userId);

  return (
    <div className="px-16">
      <div className="p-8 bg-white shadow mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p className="text-gray-400">Id</p>
              <p className="font-bold text-gray-700 text-xl">{searchParams.userId}</p>
            </div>
            <div>
              <p className="text-gray-400">Status</p>
              <p className="font-bold text-gray-700 text-xl">{resident?.status}</p>

            </div>
            <div>
              <p className="text-gray-400">Episodes</p>
              <p className="font-bold text-gray-700 text-xl">{resident?.episode.length}</p>

            </div>
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img alt="..." src={resident?.image} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
            </div>
          </div>
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <BackButton />
          </div>
        </div>
        <div className="mt-20 text-center border-b pb-6">
          <h1 className="text-4xl font-medium text-gray-700">
            {resident?.name}, <span className="font-light text-gray-500">{resident?.gender}</span>
          </h1>
          <p className="font-light text-gray-600 mt-3">{resident?.species}, {resident?.type}</p>
          <p className="mt-8 text-gray-500">
            Origin - {resident?.origin.name}
          </p>
          <p className="mt-2 text-gray-500">Last known location - {resident?.location.name}</p>
        </div>
        <div className="mt-6 flex flex-col justify-center">
            <NoteList userId={resident?.id} residentName={resident?.name} />
        </div>
      </div>
    </div>

  )
}

export default UserDetails