import styled from "styled-components"

export const MainContainer = styled.main`
    background: #FFF;
    border-radius: 25px 25px 0px 0px;
    padding: 2rem;

    @media(min-width: 950px) {
        display: grid;
        grid-template-columns: 1fr 1fr;

        max-width: 57.5rem;
        gap: 3rem;
        margin-inline: auto;
        padding: 3rem;

        border-radius: 25px;
    }
`

export const Label = styled.label`
    color: #5e7a7d;
    line-height: 1.5rem;
    margin-bottom: 0.375rem;
    display: block;
`

export const InputContainer = styled.div`
    background: #F3F9FA;
    padding: 0.375rem 1rem;
    display: flex;
    align-items: center;
    border-radius: 5px;

    input {
        border: 0;
        background: transparent;
        font-size: 1.5rem;
        text-align: right;
        width: 100%;
        outline: none;
        color: #00474B;

        &::placeholder {
            color: #9EBBBD;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    &:has(input:hover),
    &:has(input:focus) {
        outline: 2px solid #26c2ae;
    }
`

export const ContaContainer = styled.div`
    margin-bottom: 2rem;
`

export const ButtonsContainer = styled.div`
    margin-top: 0.625rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    input {
        border: 0;
        outline: none;
        font-size: 1.5rem;
        padding: 0.375rem 1rem;
        border-radius: 5px;
    }

    input[type="button"] {
        background: #00474B;
        color: #FFF;

        &:hover {
            background: #9fe8df;
            cursor: pointer;
        }
    }

    input#custom-tip {
        width: 100%;
        background: #F3F9FA;
        text-align: center;
        color: #00474B;

        &::placeholder {
            color: #547878;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        &:hover,
        &:focus {
            outline: 2px solid #26c2ae;
        }
    }

    @media(min-width: 950px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

export const PorcentagemContainer = styled(ContaContainer)``

export const PessoasContainer = styled(ContaContainer)``