import styled from 'styled-components'

export const ChangeIndicator = styled.div<{ changed?: boolean }>`
    box-shadow: ${({ changed }) => (changed ? '0 0 0 2px orange' : 'none')};
    border-radius: 2px;
`
