import * as React from 'react';
import {
    CommonActions,
    DrawerActions,
    DrawerNavigationState,
    ParamListBase,
    useLinkBuilder,
} from '@react-navigation/native';

import { DrawerItem } from '@react-navigation/drawer';

export default function CustomDrawerList({
    state,
    navigation,
    descriptors,
    activeTintColor,
    inactiveTintColor,
    activeBackgroundColor,
    inactiveBackgroundColor,
    itemStyle,
    labelStyle,
}) {
    const buildLink = useLinkBuilder();

    return state.routes.map((route, i) => {
        const focused = i === state.index;
        //Access the custom onPress that is passed as an option
        const { title, drawerLabel, drawerIcon, onPress } = descriptors[route.key].options;

        return (
            <DrawerItem
                key={route.key}
                label={
                    drawerLabel !== undefined
                        ? drawerLabel
                        : title !== undefined
                            ? title
                            : route.name
                }
                icon={drawerIcon}
                focused={focused}
                activeTintColor={activeTintColor}
                inactiveTintColor={inactiveTintColor}
                activeBackgroundColor={activeBackgroundColor}
                inactiveBackgroundColor={inactiveBackgroundColor}
                labelStyle={labelStyle}
                style={itemStyle}
                to={buildLink(route.name, route.params)}
                onPress={
                    //if onPress is available use that or call the usual navigation dispatch
                    // i also passed the navigation so that we can use it in our custom calls
                    onPress
                        ? () => onPress(navigation)
                        : () => {
                            navigation.dispatch({
                                ...(focused
                                    ? DrawerActions.closeDrawer()
                                    : CommonActions.navigate(route.name)),
                                target: state.key,
                            });
                        }
                }
            />
        );
    });
}
