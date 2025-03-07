import backend from '@neos-project/neos-ui-backend-connector'

import { BackendEndpoints } from '../types'

export const endpoints = () => backend.get().endpoints as BackendEndpoints
