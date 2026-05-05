import { useRef } from 'react';
import { Group, Panel, Separator } from 'react-resizable-panels';
import { Outlet } from 'react-router';
import { Header } from './Header';
import Player from '../../../../widgets/player';
import Playlists from '../../../../widgets/playlists';
import TrackInformation from '../../../../widgets/track-information/ui/TrackInformation';

const MainLayout = () => {
    const leftPanelRef = useRef(null);
    const rightPanelRef = useRef(null);

    const expandLeft = () => leftPanelRef.current?.resize(200);
    const expandRight = () => rightPanelRef.current?.resize(200);

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Group orientation="horizontal" className="flex-1">
                <Panel
                    panelRef={leftPanelRef}
                    defaultSize={300}
                    minSize={200}
                    collapsedSize={50}
                    collapsible
                >
                    <Playlists onExpand={expandLeft} />
                </Panel>

                <Separator className="w-1 bg-gray-300 hover:bg-gray-400 transition-colors" />

                <Panel>
                    <Outlet />
                </Panel>

                <Separator className="w-1 bg-gray-300 hover:bg-gray-400 transition-colors" />

                <Panel
                    panelRef={rightPanelRef}
                    defaultSize={300}
                    minSize={200}
                    collapsedSize={50}
                    collapsible
                >
                    <TrackInformation onExpand={expandRight} />
                </Panel>
            </Group>
            <Player />
        </div>
    );
};

export default MainLayout;