import "../app/globals.css";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

function App() {
  return (
    <div className="w-full h-full bg-blue-100">
      <div>
        <ContextMenu>
          <ContextMenuTrigger className="flex justify-center w-full p-6">
            <div className="flex items-center justify-center w-1/2 p-4 text-sm bg-white rounded-md">
              Right click here
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>
                  Save Page As...
                  <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuItem>Name Window...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>
                  Save Page As...
                  <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuItem>Name Window...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem inset>
              Back
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset>
              Back
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset>
              Back
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </div>
  );
}

export default App;
