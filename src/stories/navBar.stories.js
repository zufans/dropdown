import React from "react"
import QuickNav from "../components/Navagtion/navigation-bar"
import Dropdown from "../components/Dropdown/dropdown"

//import ZFDropDownItem from "../components/Navagtion/dropDown"
import ZFNavItems from "../components/Dropdown/items"

export default {
    title: "Navigation",
    component: QuickNav,
    subcomponents : [Dropdown, ZFNavItems]
}

const navItemsLink = [
    {lable:"Home", onClick: console.log('home')},
    {lable:"About", onClick: console.log('home')},
    {lable:"Contact", onClick: console.log('home')}
]


const Items = (args) => <ZFNavItems {...args} />;
const ItemOfMenu = Items.bind({})
ItemOfMenu.args={
    lable:"Home"
}

const DropThatMenu = (args) => <Dropdown {...args} />;
/*export*/ const dropItems = DropThatMenu.bind({})
dropItems.args={
    lable:navItemsLink,
    title: "Nav"
}




const Temp = (args) => (<QuickNav {...args}/>);
export const Nav = Temp.bind({});
Nav.args={
    dark: true,
    brand: "Kidus",
    left: <Dropdown lable={navItemsLink} title="Left"/>,
    center: <Dropdown lable={navItemsLink} title="Left"/>,
    //center: navItemsLink.map(v => { return <ZFNavItems lable={v.lable} />}),
    right: <Dropdown lable={navItemsLink} title="Right"/>,
}

export const NavbarwithLogo = Temp.bind({});
NavbarwithLogo.args={
    dark: true,
    brand: <img src='https://placeholder.pics/svg/150x50/888888/EEE/Logo' alt='logo' height={30} width={80}/>,
    left: "left",
    center: 'center',
    right: 'right'
}

export const NavbarBgColor = Temp.bind({});
NavbarBgColor.args={
    dark: false,
    brand: <img src='https://placeholder.pics/svg/150x50/888888/EEE/Logo' alt='logo' height={30} width={80}/>,
    brandLink: "https://google.com",
    left: "left",
    center: 'center',
    right: 'right',
}

