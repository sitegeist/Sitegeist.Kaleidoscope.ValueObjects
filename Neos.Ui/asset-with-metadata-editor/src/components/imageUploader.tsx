import React from 'react'
import Dropzone from 'react-dropzone'

import { useNodePaths } from '../hooks/useNodePaths'
import { endpoints } from '../neos-bridge/backend'

type ImageUploaderProps =
    | {
          dropzoneRef: React.RefObject<any>
          children: React.ReactNode
          multiple: true
          onUpload: (assetIdentifier: string[]) => void
      }
    | {
          dropzoneRef: React.RefObject<any>
          children: React.ReactNode
          multiple: false
          onUpload: (assetIdentifier: string) => void
      }
export const ImageUploader = ({ dropzoneRef, children, multiple, onUpload }: ImageUploaderProps) => {
    const { focusedNodePath, siteNodeContextPath } = useNodePaths()

    const handleDrop = async (acceptedFiles: File[]) => {
        const { uploadAsset } = endpoints()

        if (multiple) {
            const results = await Promise.all(
                acceptedFiles.map(async (file) => {
                    const result = await uploadAsset(file, 'Image', focusedNodePath, siteNodeContextPath, 'Image')
                    return result.object.__identity
                })
            )
            return onUpload(results)
        }

        const result = await uploadAsset(acceptedFiles[0], 'Image', focusedNodePath, siteNodeContextPath, 'Image')
        return onUpload(result.object.__identity)
    }

    return (
        <Dropzone
            ref={dropzoneRef}
            onDrop={handleDrop}
            noClick
            noKeyboard
            multiple={multiple}
            accept={{
                'image/*': [],
            }}
        >
            {({ getRootProps, getInputProps }) => {
                return (
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {children}
                    </div>
                )
            }}
        </Dropzone>
    )
}
