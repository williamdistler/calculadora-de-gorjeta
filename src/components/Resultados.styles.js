import styled from "styled-components"

export const ResultadosContainer = styled.div`
    background-color: #00474B;
    border-radius: 15px;
    padding: 2rem 1.5rem;

    button {
        width: 100%;
        background: #26C2AE;
        color: #00474B;
        border: 0;
        font-size: 1.25rem;
        padding-block: 0.5rem;
        border-radius: 5px;
        text-transform: uppercase;
    }

    @media(min-width: 950px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const GorjetaContainer = styled.div`
    display: flex;
    margin-bottom: 1.5rem;
    justify-content: space-between;
    align-items: center;

    p:first-child {
        color: white;
        line-height: 1.5rem;

        span {
            color: #7E9D7F;
            font-size: 0.75rem;
        }
    }

    p:last-child {
        color: #26C2AE;
        font-size: 2rem;
        line-height: 3rem;
    }
`

export const TotalContainer = styled(GorjetaContainer)`
    margin-bottom: 2rem;
`
export const GorjetaTotalContainer = styled.div`

`