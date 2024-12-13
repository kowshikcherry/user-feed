import React, { useState } from 'react'
import { ArrowLeft, Camera, FileUp } from 'lucide-react'

export default function Adding() {
  const [postText, setPostText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle post creation here
    console.log('Post text:', postText)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-[375px] h-[812px] bg-white font-sans shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center border-b">
          <button className="text-black">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="ml-4 text-black text-lg font-semibold">New post</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="absolute top-[72px] left-0 right-0 bottom-0 px-4">
          <textarea 
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full min-h-[150px] border-0 resize-none text-base focus-visible:ring-0 placeholder:text-gray-500"
          />

          {/* File Upload Options */}
          <div className="space-y-3 mt-4">
            <button
              type="button"
              variant="outline"
              className="w-full justify-start text-gray-700 font-normal"
            >
              <FileUp className="h-5 w-5 mr-2" />
              Choose the file
            </button>
            
            <button
              type="button"
              variant="outline"
              className="w-full justify-start text-gray-700 font-normal"
            >
              <Camera className="h-5 w-5 mr-2" />
              Camera
            </button>
          </div>

          {/* Create Button */}
          <button
            type="submit"
            className="absolute bottom-8 left-4 right-4 bg-black text-white hover:bg-black/90 rounded-full py-6 text-base font-medium"
          >
            CREATE 
          </button>
        </form>
      </div>
    </div>
  )
}

