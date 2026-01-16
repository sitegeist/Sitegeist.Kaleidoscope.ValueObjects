import I18n from '@neos-project/neos-ui-i18n'
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
    const getValidationErrorMessage = (validatorOptions: NotEmptyOptions) => {
        if (validatorOptions?.validationErrorMessage) {
            return validatorOptions.validationErrorMessage
        }
        if (validatorOptions.alt && validatorOptions.title) {
            return 'Sitegeist.Kaleidoscope.ValueObjects.validation.missingTitleAndAlt'
        }
        if (validatorOptions.alt) {
            return 'Sitegeist.Kaleidoscope.ValueObjects.validation.missingAlt'
        }
        if (validatorOptions.title) {
            return 'Sitegeist.Kaleidoscope.ValueObjects.validation.missingTitle'
        }
        return 'content.inspector.validators.notEmptyValidator.isEmpty'
    }

    const getValidationCollectionErrorMessage = (validatorOptions: NotEmptyOptions) => {
        if (validatorOptions?.validationErrorMessage) {
            return validatorOptions.validationErrorMessage
        }
        if (validatorOptions.alt && validatorOptions.title) {
            return 'Sitegeist.Kaleidoscope.ValueObjects.validation.collectionItemMissingTitleAndAlt'
        }
        if (validatorOptions.alt) {
            return 'Sitegeist.Kaleidoscope.ValueObjects.validation.collectionItemMissingAlt'
        }
        if (validatorOptions.title) {
            return 'Sitegeist.Kaleidoscope.ValueObjects.validation.collectionItemMissingTitle'
        }
        return 'content.inspector.validators.notEmptyValidator.isEmpty'
    }

    if (Array.isArray(value)) {
        if (value.some((item) => !isValueValid(item, validatorOptions))) {
            return <I18n id={getValidationErrorMessage(validatorOptions)} />
        }
        return null
    }

    if (!isValueValid(value, validatorOptions)) {
        return <I18n id={getValidationCollectionErrorMessage(validatorOptions)} />
    }

    return null
}
