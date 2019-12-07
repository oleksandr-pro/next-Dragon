import React, { Fragment } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import ProjectTabContent from "./ProjectTabContent";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js";
import {PROJECT} from "../../../constants";

const useStyles = makeStyles(styles);

const data = [
    {
        tabButton: "FRONTEND",
        tabContent: (<ProjectTabContent data={ PROJECT.frontends }/>)
    },
    {
        tabButton: "BACKEND",
        tabContent: (<ProjectTabContent data={ PROJECT.backends }/>)
    },
    {
        tabButton: "FullStack",
        tabContent: (<ProjectTabContent data={ PROJECT.fullstacks }/>)
    }
];


export default function Projects() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}> PROJECTS </h2>
                    </GridItem>
                </GridContainer>
                <GridContainer justify="center">
                    <GridItem xs={12}>
                        <NavPills
                            color="primary"
                            alignCenter
                            tabs={data}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
