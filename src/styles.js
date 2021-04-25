import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({isNight}) => isNight ? '#282C34' : '#FFFFFF'};

    font-family: Roboto, sans-serif;

    color: #ffffff;

    .mainDiv {

        width: 35rem;
        min-height: 16rem;
        border-radius: 1rem;
        background: #01579b;

        div {
            width: 100%;
            padding: 0.5rem 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &+div {
                margin-top: 1rem;
            }

            h2 {
                margin-bottom: 1rem;
                font-size: 1.6rem;
                font-weight: normal;
            }

            p {
                font-size: 1.5rem;
                font-weight: bold;
            }

        }

        .header {

            height: 2rem;
            background: #424242;
            border-radius: 0.9rem 0.9rem 0 0;
            padding: 1.5rem 0.8rem;

            button {

                background: inherit;
                border: 2px solid #53c3f8;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 1.8rem;
                height: 1.8rem;

                svg {
                    color: #53c3f8;
                    font-size: 0.8rem;
                }

                &:hover {
                    cursor: pointer;
                    border: 2px solid #ffffff;
                    svg {
                        color: #ffffff;
                    }
                }
            }
        }

    }
`