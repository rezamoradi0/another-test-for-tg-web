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
import WebApp  from "@twa-dev/sdk";
import Planet from "./components/game/Planet";
const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

function App() {
  
  const { network } = useTonConnect();

  return (
    <StyledApp>
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
              <span className="">   Coins : 10 </span>
              <span>   Oil : 10 li</span>
              <span>   Water : 49 li </span>
            </div>
            <Planet />
          </div>
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
