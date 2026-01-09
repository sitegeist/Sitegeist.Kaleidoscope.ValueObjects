import React from 'react'

import { AssetWithMeta } from '../types'
import { isEmpty } from '../utils/isEmpty'

interface NotEmptyOptions {
    alt: boolean
    title: boolean
    validationErrorMessage?: string
}

const isValueValid = (value: AssetWithMeta, validatorOptions: NotEmptyOptions) => {
    if (!value) {
        return true
    }

    if (validatorOptions.alt && isEmpty(value?.alt)) {
        return false
    }

    if (validatorOptions.title && isEmpty(value?.title)) {
        return false
    }
    return true
}

export const NotEmpty = (value: AssetWithMeta | AssetWithMeta[], validatorOptions: NotEmptyOptions) => {
    const validationErrorMessage =
        validatorOptions?.validationErrorMessage ?? 'content.inspector.validators.notEmptyValidator.isEmpty'
    if (Array.isArray(value)) {
        if (value.some((item) => !isValueValid(item, validatorOptions))) {
            return <span id={validationErrorMessage}>{validationErrorMessage}</span>
        }
        return null
    }

    if (!isValueValid(value, validatorOptions)) {
        return <span id={validationErrorMessage}>{validationErrorMessage}</span>
    }

    return null
}
