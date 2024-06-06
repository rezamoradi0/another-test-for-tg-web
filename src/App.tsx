import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import WebApp from "@twa-dev/sdk";
import Planet from "./components/game/Planet";
import { useEffect, useState } from "react";
const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0;
`;

function App() {

  const { network } = useTonConnect();
  const [coinNumber, setCoinNumber] = useState<number>(0);
  function increaseCoin() {
    setCoinNumber(perv => {
      localStorage.setItem("coins", (perv + 1).toString());
      return perv + 1
    });

  }
  useEffect(() => {
    const number = Number(localStorage.getItem("coins") || 0)
    setCoinNumber(number);
  }, [])
  return (
    <StyledApp onLoad={() => {
      WebApp.expand();
    }}>
      <AppContainer>
        <FlexBoxCol>
          <FlexBoxRow>
            <TonConnectButton />
            <Button>
              {network
                ? network === CHAIN.MAINNET
                  ? "mainnet"
                  : "testnet"
                : "N/A"}
            </Button>

          </FlexBoxRow>
          {/* <Counter />
          <TransferTon />
          <Jetton /> */}
          <div className="w-full  justify-between gap-y-12 items-center flex flex-col p-4 md:p-8">
            <div className="flex items-center justify-around gap-4">
              <span className="flex items-center justify-between gap-2">  <img src="/img.png" width={50} height={50} /> <span>:</span>  <span>  {coinNumber}</span> </span>

            </div>
            <Planet increase={increaseCoin} />
          </div>

        </FlexBoxCol>

      </AppContainer>
      <footer className="w-full items-center justify-around flex" >
        <Button onClick={() => {
          WebApp.sendData(new Date().toString())
        }}>
          Home
        </Button>
        <Button>
          Cosmos
        </Button>
        <Button>
          Allais
        </Button>
        <Button>
          Whisper
        </Button>
      </footer>
    </StyledApp>
  );
}

export default App;
