import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Topo(props) {
    const { telaInicial, setVoltou } = props;
    const navigate = useNavigate();
    return (
        <>
            {telaInicial ? <></> : <BotaoVoltar onClick={() => {
                navigate(-1);
                setVoltou(false);
            }}>Voltar</BotaoVoltar>}
            <TopoFixo >CINEFLEX</TopoFixo>
        </>
    )
}

const TopoFixo = styled.header`
    position: fixed;
    width: 100vw;
    top: 0;
    text-align: center;
    background-color: #C3CFD9;
    padding: 17px;

    font-size: 34px;
    color: #E8833A;
`

const BotaoVoltar = styled.button`
    position: fixed;
    top: 13px;
    left: 13px;
    z-index: 1;
    width: 83px;
    height: 43px;
    margin-right: 8px;
    background: #E8833A;
    border-radius: 3px;
    border: none;
`