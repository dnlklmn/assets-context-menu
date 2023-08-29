import "../app/globals.css";
import "polkadot-theme/global.css";
import "polkadot-theme/light.css";
import "polkadot-theme/dark.css";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/ContextMenu";

import {
  PolkadotCircle,
  AcalaCircle,
  MoonbeamCircle,
  HydraCircle,
  AddIcon,
} from "./components/Icons";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Button } from "./components/ui/Button";
import { Header } from "./components/ui/Header";
import Identicon from "@polkadot/react-identicon";

interface ItemContentProps {
  children?: JSX.Element;
  label?: String;
  currency?: String;
  amount?: String;
}

function ItemContent({ children, label }: ItemContentProps) {
  return (
    <ContextMenuItem>
      <div className="flex items-center gap-2 pointer-none">
        {children}
        <span>{label}</span>
      </div>
    </ContextMenuItem>
  );
}

function TokenLine({ children, currency, amount }: ItemContentProps) {
  return (
    <div className="w-full flex items-center px-2 rounded-md py-1 hover:bg-fill-selected justify-between">
      <div className="w-full flex items-center gap-2 ">
        {children}
        <span>{currency?.toUpperCase()}</span>
      </div>
      <div className="flex gap-2">
        <span>{amount}</span>
        {/* <span>{currency?.toUpperCase()}</span> */}
      </div>
    </div>
  );
}

interface ContextMenuLocalProps {
  children?: JSX.Element;
}

function ContextMenuLocal({ children }: ContextMenuLocalProps) {
  return (
    <ContextMenu>
      <Dialog>
        <ContextMenuTrigger>{children}</ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuSub>
            <ContextMenuSubTrigger>Teleport to</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ItemContent label="Assets Hub">
                <PolkadotCircle />
              </ItemContent>
              <ContextMenuSeparator />
              <ItemContent label="Polkadot Relay Chain">
                <PolkadotCircle />
              </ItemContent>
              <ItemContent label="Acala">
                <AcalaCircle />
              </ItemContent>
              <ItemContent label="HydraDX">
                <HydraCircle />
              </ItemContent>
              <ContextMenuSeparator />
              <ItemContent label="Ethereum (through bridge)">
                <HydraCircle />
              </ItemContent>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Send to Address</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ItemContent label="Stash Account">
                <Identicon
                  value="15UktDFzD6o3dS1ibxDpBbkzNX6jaEkjAe5nHcWUBMrq3SGj"
                  theme="polkadot"
                  size={24}
                />
              </ItemContent>
              <ContextMenuSeparator />
              <DialogTrigger className="w-full">
                <ItemContent label="5EZr...25Kd">
                  <Identicon
                    value="5EZrUD2S9ZyXPbZj88Ruu6ZdWCDYnxsu8sD37JW2tAU125Kd"
                    theme="polkadot"
                    size={24}
                  />
                </ItemContent>
              </DialogTrigger>
              <ItemContent label="a7dK...3y5E">
                <Identicon
                  value="a7dKBTCuTt6ZzGEgL9nQsSWKPZrxVrDghe8NP9KhCoy3y5E"
                  theme="polkadot"
                  size={24}
                />
              </ItemContent>
              <ItemContent label="Eco Stash">
                <Identicon
                  value="Xyi6j3P1d8LHMVPydzBn7yz2pojbKuXTpoNFoZLG57fJzsd"
                  theme="polkadot"
                  size={24}
                />
              </ItemContent>
              <ContextMenuSeparator />
              <ItemContent label="New Address">
                <AddIcon />
              </ItemContent>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Stake</ContextMenuItem>
          <ContextMenuItem>Delegate</ContextMenuItem>
          <ContextMenuItem>Inspect on Explorer</ContextMenuItem>
        </ContextMenuContent>
        <DialogContent className="gap-6">
          <DialogHeader>
            <DialogTitle>Send DOT to 5EZr...25Kd</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-regular text-foreground-dimmed">
              Amount
            </span>
            <div className="flex gap-4 items-center">
              <input
                value={20}
                className="w-full border-border-hint rounded-md"
              />
              <span className="font-medium">DOT</span>
            </div>
          </div>
          <div className="flex items-center w-full gap-4">
            <Button variant="outline" className="w-full rounded-full">
              Cancel
            </Button>
            <Button className="w-full bg-fill-primary hover:bg-fill-primaryHover rounded-full">
              Send
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </ContextMenu>
  );
}

function App() {
  return (
    <div className="h-screen flex flex-col items-center bg-background-default text-foreground-contrast">
      <Header />
      <div className="flex flex-col p-4 gap-2 w-1/2 m-12 rounded-lg text-lg font-medium overflow-hidden bg-background-float shadow-[inset_0_0_1px_1px_rgba(0,0,0,0.07)] dark:shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.05)]">
        <span className="text-lg px-2 font-medium my-4">
          Polkadot Assets Hub
        </span>
        <ContextMenuLocal>
          <TokenLine currency="DOT" amount="142.3901">
            <PolkadotCircle />
          </TokenLine>
        </ContextMenuLocal>
        <ContextMenuLocal>
          <TokenLine currency="GLMR" amount="73.8311">
            <MoonbeamCircle />
          </TokenLine>
        </ContextMenuLocal>
        <ContextMenuLocal>
          <TokenLine currency="ACA" amount="0.2506">
            <AcalaCircle />
          </TokenLine>
        </ContextMenuLocal>
      </div>
    </div>
  );
}

export default App;
