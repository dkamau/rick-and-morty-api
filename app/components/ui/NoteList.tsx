"use client"

import { ResidentNote } from '@/app/models/ResidentNote';
import React, { useEffect, useState } from 'react'

export interface NoteListProps {
    userId: number | undefined
    residentName: string | undefined
}

const NoteList = ({ userId, residentName }: NoteListProps) => {

    const [showAddNote, setShowAddNote] = useState(false);
    const [note, setNote] = useState("");
    const [notes, updateNotes] = useState<ResidentNote[]>((): ResidentNote[] => {
        if (typeof window !== "undefined") {
            const storedNotes = window.localStorage.getItem(`res${userId}`);
            if (storedNotes !== null && storedNotes !== "undefined") {
                return JSON.parse(storedNotes);;
            }
        };

        return [];
    });

    function addNote() {
        if (note) {
            updateNotes((prevNotes: ResidentNote[]) => [...prevNotes, {
                note: note,
                date: Date()
            }]);
            setShowAddNote(false);
            setNote("");
        }
    }

    function removeNote(note: string) {
        updateNotes(notes.filter(n => n.note !== note));
    }

    useEffect(() => {
        localStorage.setItem(`res${userId}`, JSON.stringify(notes));
    }, [notes, userId])

    let id = 0;

    return (
        <>
            <div className="">
                <div className="px-4 sm:px-8 max-w-5xl m-auto">
                    <h1 className="text-center font-semibold text-sm">Notes</h1>
                    <p className="mt-2 text-center text-xs mb-4 text-gray-500">
                        Your personal notes about {residentName}
                    </p>
                    <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
                        {
                            notes ? notes.map(note =>
                                <li key={id++} className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                                    <span>{note.note}</span>
                                    <a onClick={() => removeNote(note.note)} className='float-right'>
                                        <svg className="w-6 h-6 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </li>) : (<li>You can add your notes here...</li>)
                        }
                    </ul>
                    <div className="pb-0" style={{ display: showAddNote ? "block" : "none" }}>
                        <div className="flex rounded-lg shadow-sm">
                            <input
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                type="text" id="add-note" name="add-note" placeholder="Add Note..."
                                className="py-3 px-4 block w-full border-gray-800 shadow-sm rounded-s-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
                            <button onClick={() => addNote()} type="button" className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold border border-transparent bg-sky-600 text-white hover:bg-sky-700">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm13.7-1.3a1 1 0 0 0-1.4-1.4L11 12.6l-1.8-1.8a1 1 0 0 0-1.4 1.4l2.5 2.5c.4.4 1 .4 1.4 0l4-4Z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button onClick={() => setShowAddNote(false)} type="button" className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-red-600 text-white hover:bg-red-700">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setShowAddNote(true)} style={{ display: showAddNote ? "none" : "block" }} className="text-indigo-500 py-2 px-4  font-medium mt-4">
                Add Note
            </button>
        </>
    )
}

export default NoteList