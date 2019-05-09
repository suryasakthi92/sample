const primary = '#003973'
const secondary = '#e5e5be' //#39b696
const iconColor = '#fb5f26'
const iconDescColor = '#006400'

const gradientSecondary = ["#fff", "#39b696"]
const AppStyles = {
    primary: primary,
    screen: {
        bg: "#EBEFF0"
    },
    header: {
        bg: primary,
        h1W: "500", h2W: "400", h3W: "300",
        color: '#fff',
    },
    subHeader: {
        bg: primary,
        h1W: "400", h2W: "300", h3W: "200", h4W: "100", h5W: "100",
        color: '#fff',
    },
    fontSize: {
        h1: 17, h2: 16, h3: 15, h4: 14, h5: 13, h6: 12, l1: 20, l2: 19, l3: 18
    },
    gradient: {
        color: [primary, secondary],
        secondary: gradientSecondary,
    },
    button: {
        bg: secondary
    },
    icon: {
        color: iconColor,
        iconDescColor: iconDescColor,
        title: primary
    },
    tabs: {
        activeTintColor: '#FFF',
        inactiveTintColor: '#FFF',
        fontSize: 9,
        bg: primary,
        tabBarPosition: "bottom",
    },
    segment: {
        color: secondary,
        borderColor: secondary,
        activeTintColor: '#FFF',
        inactiveTintColor: 'grey',
    },
    toast: {
        success: '#76D7C4',
        warning: '#F0B27A',
        info: '#00CED1',
        error: '#EC7063',
    },
    common: {
        holidays: '#FFC300',
        present: '#7CD185',
        absent: '#FF9999'
    },
    status: {
        sent: "#7CD185",
        draft: "#FFC300",
        deny: "#EC7063"
    }

}

export default AppStyles
