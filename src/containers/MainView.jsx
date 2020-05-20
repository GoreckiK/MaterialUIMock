import React from 'react';
import ToolbarWithSearch from "../components/Toolbar";
import SideBar from "../components/SideBar";

export default function MainView() {
    const mainStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        marginTop: "30px"
    };

    return (
        <div style={mainStyle}>
            <ToolbarWithSearch/>
            <SideBar/>
        </div>
    );
}
