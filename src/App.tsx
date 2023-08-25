import "../app/globals.css";
import "../app/global.css";
import "../app/light.css";
import "../app/dark.css";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import PolkadotIcon from "./components/logos/PolkadotIcon";
import AcalaIcon from "./components/logos/AcalaIcon";
import HydraIcon from "./components/logos/HydraIcon";
import Identicon from "@polkadot/react-identicon";
import AddIcon from "./components/logos/AddIcon";

interface ItemContentProps {
  children?: JSX.Element;
  label?: String;
}

function ItemContent({ children, label }: ItemContentProps) {
  return (
    <ContextMenuItem>
      <div className="flex items-center gap-2">
        {children}
        <span>{label}</span>
      </div>
    </ContextMenuItem>
  );
}

function App() {
  return (
    <div className="w-full h-full bg-background-default">
      <div>
        <ContextMenu>
          <ContextMenuTrigger className="flex justify-center w-full p-6 rounded-md shadow-sm bg-background-float">
            <div className="flex items-center justify-center w-1/2 p-4 text-sm ">
              Right click here
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuSub>
              <ContextMenuSubTrigger>Teleport to</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ItemContent label="Assets Hub">
                  <PolkadotIcon />
                </ItemContent>
                <ContextMenuSeparator />
                <ItemContent label="Polkadot Relay Chain">
                  <PolkadotIcon />
                </ItemContent>
                <ItemContent label="Acala">
                  <AcalaIcon />
                </ItemContent>
                <ItemContent label="HydraDX">
                  <HydraIcon />
                </ItemContent>
                <ContextMenuSeparator />
                <ItemContent label="Ethereum (through bridge)">
                  <HydraIcon />
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
                <ItemContent label="5EZr...25Kd">
                  <Identicon
                    value="5EZrUD2S9ZyXPbZj88Ruu6ZdWCDYnxsu8sD37JW2tAU125Kd"
                    theme="polkadot"
                    size={24}
                  />
                </ItemContent>
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
        </ContextMenu>
      </div>
    </div>
  );
}

export default App;
